"use client";

import Image from "next/image";
import Link from "next/link";
import { eventsContent, type EventItem } from "@/content/events";

const HERO_IMAGE = "/stock/destinations-hero.jpg";

export function EventsHero() {
  const { hero } = eventsContent;

  return (
    <section className="relative min-h-[72vh] overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Families at an education fair speaking with advisors"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/40 lg:via-background/85 lg:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />

      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-32 lg:px-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-teal">
          {hero.label}
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {hero.title}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {hero.description}
        </p>
      </div>
    </section>
  );
}

function formatRibbonDate(isoOrDisplay: string) {
  const parsed = Date.parse(isoOrDisplay);
  if (Number.isNaN(parsed)) {
    return { month: "—", day: "—", range: isoOrDisplay };
  }
  const d = new Date(parsed);
  return {
    month: d.toLocaleString("en-GB", { month: "short" }).toUpperCase(),
    day: String(d.getDate()),
    range: d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };
}

function formatDateRange(event: EventItem) {
  const start = formatRibbonDate(event.startDate);
  if (!event.endDate) return start.range;
  const end = formatRibbonDate(event.endDate);
  if (start.range === end.range) return start.range;
  return `${start.range} – ${end.range}`;
}

function EventRibbonCard({ event }: { event: EventItem }) {
  const ribbon = formatRibbonDate(event.startDate);
  const participateLabel = event.participateLabel ?? "Click to participate";
  const isExternal = !event.participateUrl.startsWith("/");

  return (
    <li className="group flex overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div
        aria-hidden
        className="relative flex w-[5.5rem] shrink-0 flex-col items-center justify-center bg-navy px-2 py-6 text-center text-white sm:w-28"
      >
        <div className="absolute inset-y-3 left-0 w-1 rounded-full bg-teal" />
        <span className="text-[0.65rem] font-bold tracking-[0.2em] text-teal">
          {ribbon.month}
        </span>
        <span className="mt-1 font-display text-3xl font-semibold leading-none sm:text-4xl">
          {ribbon.day}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-5 sm:p-7">
        <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
          {event.name}
        </h2>
        <p className="text-sm text-muted-foreground">{formatDateRange(event)}</p>
        {event.location ? (
          <p className="text-sm text-muted-foreground">{event.location}</p>
        ) : null}
        {isExternal ? (
          <a
            href={event.participateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center text-sm font-semibold text-teal underline underline-offset-4 hover:text-teal/80"
          >
            {participateLabel} →
          </a>
        ) : (
          <Link
            href={event.participateUrl}
            className="mt-2 inline-flex items-center text-sm font-semibold text-teal underline underline-offset-4 hover:text-teal/80"
          >
            {participateLabel} →
          </Link>
        )}
      </div>
    </li>
  );
}

export function EventsListSection() {
  const { events, empty } = eventsContent;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {events.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-muted/30 px-6 py-12 text-center sm:px-10 sm:py-16">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal">
              Upcoming
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{empty.title}</h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted-foreground">
              {empty.body}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-teal px-6 text-sm font-semibold text-white shadow-lg shadow-teal/20 transition-colors hover:bg-teal/90"
            >
              Contact us about events →
            </Link>
          </div>
        ) : (
          <ul className="space-y-5" aria-label="Upcoming events">
            {events.map((event) => (
              <EventRibbonCard key={event.id} event={event} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
