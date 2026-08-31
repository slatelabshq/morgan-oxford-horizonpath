import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Destination } from "@/content/destinations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

type Props = {
  destination: Destination;
};

export function DestinationDetailSection({ destination }: Props) {
  return (
    <>
      <section className="relative h-[42vh] min-h-[18rem] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-10 lg:px-8">
          <Link
            href="/destinations"
            className="inline-flex items-center text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            All destinations
          </Link>
          <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-teal">
            {destination.tagline}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
            {destination.name}
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {destination.narrative}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {destination.highlights.map((h) => (
                <Badge key={h} variant="accent">
                  {h}
                </Badge>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-teal">
                  Tuition
                </p>
                <p className="mt-4 font-display text-3xl font-bold text-foreground">
                  {destination.tuitionPerYear}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">per year, tuition only</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-teal">
                  Living expenses
                </p>
                <ul className="mt-4 space-y-3">
                  {destination.livingExpenses.map((row) => (
                    <li
                      key={row.region}
                      className="flex items-start justify-between gap-4 text-sm sm:text-base"
                    >
                      <span className="text-muted-foreground">{row.region}</span>
                      <span className="font-semibold text-foreground">{row.amount}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">
                  Indicative annual ranges — varies by city and lifestyle.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-16" delay={0.15}>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-teal">
              Placements & outcomes
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground">
              What this looks like in practice.
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {destination.stories.map((story) => (
                <blockquote
                  key={story.title}
                  className="rounded-3xl border border-border bg-card p-8 shadow-sm"
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal">
                    {story.title}
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{story.body}</p>
                </blockquote>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-14 text-center" delay={0.2}>
            <Button asChild variant="accent" size="lg" data-cursor-accent className="group shadow-lg shadow-teal/20">
              <Link href="/contact">
                Start your {destination.name} application
                <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
