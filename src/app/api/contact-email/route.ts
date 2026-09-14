import { NextResponse } from "next/server";
import { getContent } from "@/lib/content";

export async function GET() {
  const { identity } = await getContent();
  return NextResponse.json({ email: identity.email });
}
