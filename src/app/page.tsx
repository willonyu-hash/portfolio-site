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

      <main>
        <HeroSection profile={profile} resumePath={contact.resumePath} />
        <AboutSection profile={profile} />

        <ShowcaseSection
          id="reports"
          eyebrow="Trend Reports"
          title="Selected reporting work shaped for fast reading and strong design translation."
          description="Use this section to highlight the reports that best represent your judgment, category understanding, and ability to convert raw signals into clear direction."
          items={reports}
        />

        <ShowcaseSection
          id="projects"
          eyebrow="Projects"
          title="Project experience that shows how research becomes usable creative direction."
          description="This section is ideal for broader experience beyond reports: internal initiatives, concept planning, team collaboration, and proposal packaging."
          items={projects}
        />

        <ShowcaseSection
          id="ai-cases"
          eyebrow="AI Cases"
          title="AI application examples focused on real workflow value, not gimmicky noise."
          description="Show how AI helps you research faster, communicate better, and build smarter working methods without replacing your own professional judgment."
          items={aiCases}
        />

        <ContactSection contact={contact} />
      </main>
    </div>
  );
}
