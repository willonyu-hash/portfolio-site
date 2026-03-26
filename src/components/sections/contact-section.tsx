import type { ContactContent } from "@/lib/content-types";

import { SectionHeading } from "@/components/ui/section-heading";

type ContactSectionProps = {
  contact: ContactContent;
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Built to open a conversation, not just decorate a QR code."
          description="Keep this section practical. Interviewers should be able to contact you or download your resume in one tap."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5 rounded-[30px] border border-line bg-white/82 p-6 shadow-panel sm:p-8">
            <p className="font-display text-3xl leading-tight text-ink">{contact.email}</p>
            <p className="text-sm leading-7 text-ink/72 sm:text-base">{contact.note}</p>
            <a
              href={contact.resumePath}
              className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-xs uppercase tracking-[0.22em] text-sand transition hover:bg-accent"
            >
              {contact.resumeLabel}
            </a>
          </div>

          <div className="space-y-4">
            {contact.links.map((item) => (
              <a
                key={`${item.label}-${item.value}`}
                href={item.href}
                className="flex items-center justify-between gap-4 border-b border-line py-4 transition hover:border-ink"
              >
                <span className="text-xs uppercase tracking-[0.24em] text-ink/46">{item.label}</span>
                <span className="text-right text-sm text-ink/82 sm:text-base">{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
