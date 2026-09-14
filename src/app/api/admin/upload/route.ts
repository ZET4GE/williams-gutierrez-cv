import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-session";
import { adminBucket } from "@/lib/firebase-admin";

const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp", "image/gif"];

export async function POST(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const formData = await req.formData().catch(() => null);
  const file = formData?.get("file");
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "Falta el archivo" }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json({ error: "Formato de imagen no soportado" }, { status: 400 });
  }

  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json({ error: "La imagen supera los 5 MB" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
  const path = `projects/${Date.now()}-${safeName}`;

  const bucket = adminBucket();
  const blob = bucket.file(path);
  await blob.save(buffer, { metadata: { contentType: file.type } });

  const [url] = await blob.getSignedUrl({
    action: "read",
    expires: "03-01-2500",
  });

  return NextResponse.json({ url });
}
