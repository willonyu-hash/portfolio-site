import type { ContactContent } from "@/lib/content-types";

import { SectionHeading } from "@/components/ui/section-heading";

type ContactSectionProps = {
  contact: ContactContent;
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="A clean finish designed for fast follow-up after the scan."
          description="For interview use, this area should stay frictionless: one clear email, one resume action, and a short list of relevant links."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="surface-panel rounded-[2rem] border border-white/45 p-6 shadow-[0_24px_72px_rgba(28,22,18,0.07)] sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.34em] text-ink/42">Primary contact</p>
            <p className="mt-4 font-display text-[2.3rem] leading-[1.02] text-ink sm:text-[3rem]">{contact.email}</p>
            <p className="mt-5 max-w-lg text-[15px] leading-8 text-ink/68 sm:text-base">{contact.note}</p>
            <a
              href={contact.resumePath}
              className="mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-sand transition duration-300 hover:bg-accent"
            >
              {contact.resumeLabel}
            </a>
          </div>

          <div className="space-y-2">
            {contact.links.map((item) => (
              <a
                key={`${item.label}-${item.value}`}
                href={item.href}
                className="group flex items-center justify-between gap-4 border-b border-line/80 py-5 transition hover:border-ink/40"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-ink/42">{item.label}</span>
                <span className="text-right text-[15px] text-ink/78 transition group-hover:text-ink sm:text-base">{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
