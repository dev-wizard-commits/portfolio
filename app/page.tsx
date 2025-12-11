import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { About } from "@/components/main/about";
import { Experience } from "@/components/main/experience";
import { Statistics } from "@/components/main/statistics";
import { Contact } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Statistics />
        <Experience />
        <Encryption />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
