import { Contact } from "@/components/Contact";
import { EducationCerts } from "@/components/EducationCerts";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InfraProjects } from "@/components/InfraProjects";
import { Nav } from "@/components/Nav";
import { Stack } from "@/components/Stack";
import { WebProjects } from "@/components/WebProjects";

export const revalidate = 300;

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Experience />
        <InfraProjects />
        <WebProjects />
        <Stack />
        <EducationCerts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
