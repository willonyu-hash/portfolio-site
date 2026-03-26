import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ShowcaseSection } from "@/components/sections/showcase-section";
import { SiteHeader } from "@/components/sections/site-header";
import { aiCases } from "@/content/ai-cases";
import { contact } from "@/content/contact";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { reports } from "@/content/reports";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Reports", href: "#reports" },
  { label: "Projects", href: "#projects" },
  { label: "AI", href: "#ai-cases" },
  { label: "Contact", href: "#contact" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <SiteHeader items={navigation} />

      <main className="overflow-x-clip">
        <HeroSection profile={profile} resumePath={contact.resumePath} />
        <AboutSection profile={profile} />

        <ShowcaseSection
          id="reports"
          eyebrow="Trend Reports"
          title="Trend reporting presented with stronger visual hierarchy and faster reading rhythm."
          description="In interview settings, this section should quickly prove judgment, category depth, and your ability to convert scattered signals into a usable design direction."
          items={reports}
        />

        <ShowcaseSection
          id="projects"
          eyebrow="Projects"
          title="Project work that shows how research becomes direction, language, and creative conversion."
          description="Use this area to show seniority through structure: what the project needed, what role you played, and why the output mattered."
          items={projects}
        />

        <ShowcaseSection
          id="ai-cases"
          eyebrow="AI Cases"
          title="AI practice framed as professional leverage, not gimmicky decoration."
          description="The goal here is to show applied thinking: where AI improved research, communication, and efficiency while your own judgment stayed in charge."
          items={aiCases}
        />

        <ContactSection contact={contact} />
      </main>
    </div>
  );
}
