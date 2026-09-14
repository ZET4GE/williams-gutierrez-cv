import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getAdminSession } from "@/lib/admin-session";
import { saveContent, type PortfolioContent } from "@/lib/content";

const REQUIRED_KEYS: (keyof PortfolioContent)[] = [
  "identity",
  "experience",
  "infraProjects",
  "webProjects",
  "otherWebProjects",
  "stackGroups",
  "languages",
  "learning",
  "education",
  "certifications",
];

export async function PUT(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  for (const key of REQUIRED_KEYS) {
    if (!(key in body)) {
      return NextResponse.json({ error: `Falta la sección "${key}"` }, { status: 400 });
    }
  }

  await saveContent(body as PortfolioContent);

  revalidatePath("/");
  revalidatePath("/cv");

  return NextResponse.json({ ok: true });
}
