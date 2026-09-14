import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";
import {
  isAuthorizedAdmin,
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE_MS,
} from "@/lib/admin-session";

export async function POST(req: NextRequest) {
  const { idToken } = await req.json().catch(() => ({ idToken: undefined }));
  if (!idToken || typeof idToken !== "string") {
    return NextResponse.json({ error: "Falta idToken" }, { status: 400 });
  }

  let decoded;
  try {
    decoded = await adminAuth().verifyIdToken(idToken);
  } catch {
    return NextResponse.json({ error: "Token inválido" }, { status: 401 });
  }

  if (!isAuthorizedAdmin(decoded.email)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  }

  const sessionCookie = await adminAuth().createSessionCookie(idToken, {
    expiresIn: SESSION_MAX_AGE_MS,
  });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE_NAME, sessionCookie, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_MS / 1000,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}
