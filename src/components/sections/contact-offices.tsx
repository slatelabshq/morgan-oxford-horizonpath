import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { offices, whatsapp } from "@/content/contact";

export function ContactOffices() {
  return (
    <aside className="space-y-6">
      <p className="text-xs font-extrabold uppercase tracking-widest text-teal">
        Our offices
      </p>

      {offices.map((office) => (
        <article
          key={office.city}
          className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
        >
          <h3 className="font-display text-lg font-semibold text-ink">
            {office.city}
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <p className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <span>{office.address}</span>
            </p>
            <a
              href={office.phoneHref}
              className="flex items-center gap-3 text-ink transition-colors hover:text-teal"
            >
              <Phone className="h-4 w-4 shrink-0 text-teal" />
              {office.phone}
            </a>
            <a
              href={`mailto:${office.email}`}
              className="flex items-center gap-3 break-all text-ink transition-colors hover:text-teal"
            >
              <Mail className="h-4 w-4 shrink-0 text-teal" />
              {office.email}
            </a>
          </div>
        </article>
      ))}

      <a
        href={whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-6 text-sm shadow-sm transition-colors hover:border-teal/30"
      >
        <MessageCircle className="h-5 w-5 shrink-0 text-teal" />
        <span>
          <span className="block text-xs font-extrabold uppercase tracking-widest text-teal">
            WhatsApp
          </span>
          <span className="mt-1 block font-medium text-ink">{whatsapp.display}</span>
        </span>
      </a>
    </aside>
  );
}
