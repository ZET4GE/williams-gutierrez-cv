import "server-only";
import { cache } from "react";
import { adminDb } from "@/lib/firebase-admin";
import * as defaults from "@/data/profile";
import type {
  Experience,
  InfraProject,
  WebProject,
  StackGroup,
} from "@/data/profile";

export type { Experience, InfraProject, WebProject, StackGroup };

export type PortfolioContent = {
  identity: typeof defaults.identity;
  experience: Experience[];
  infraProjects: InfraProject[];
  webProjects: WebProject[];
  otherWebProjects: typeof defaults.otherWebProjects;
  stackGroups: StackGroup[];
  languages: typeof defaults.languages;
  learning: string[];
  education: typeof defaults.education;
  certifications: typeof defaults.certifications;
};

export const defaultContent: PortfolioContent = {
  identity: defaults.identity,
  experience: defaults.experience,
  infraProjects: defaults.infraProjects,
  webProjects: defaults.webProjects,
  otherWebProjects: defaults.otherWebProjects,
  stackGroups: defaults.stackGroups,
  languages: defaults.languages,
  learning: defaults.learning,
  education: defaults.education,
  certifications: defaults.certifications,
};

const CONTENT_COLLECTION = "site";
const CONTENT_DOC = "content";

/** Lee el contenido crudo de Firestore, o los valores por defecto si el documento no existe o hay un error. */
export const getContent = cache(async (): Promise<PortfolioContent> => {
  try {
    const snap = await adminDb().collection(CONTENT_COLLECTION).doc(CONTENT_DOC).get();
    if (!snap.exists) return defaultContent;
    const data = snap.data() as Partial<PortfolioContent>;
    return { ...defaultContent, ...data };
  } catch (err) {
    console.error("No se pudo leer el contenido desde Firestore, usando valores por defecto:", err);
    return defaultContent;
  }
});

export async function saveContent(content: PortfolioContent): Promise<void> {
  await adminDb().collection(CONTENT_COLLECTION).doc(CONTENT_DOC).set(content);
}
