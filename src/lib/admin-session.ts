import "server-only";
import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebase-admin";

export const SESSION_COOKIE_NAME = "admin_session";
export const SESSION_MAX_AGE_MS = 5 * 24 * 60 * 60 * 1000; // 5 días

export function isAuthorizedAdmin(email: string | undefined | null): boolean {
  const allowed = process.env.ADMIN_EMAIL?.toLowerCase().trim();
  if (!allowed || !email) return false;
  return email.toLowerCase().trim() === allowed;
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!sessionCookie) return null;

  try {
    const decoded = await adminAuth().verifySessionCookie(sessionCookie, true);
    if (!isAuthorizedAdmin(decoded.email)) return null;
    return decoded;
  } catch {
    return null;
  }
}
