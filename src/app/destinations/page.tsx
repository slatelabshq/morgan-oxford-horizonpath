import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { destinationsContent } from "@/content/destinations";
import { DestinationsHero } from "@/components/sections/destinations-hero";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { TiltCard } from "@/components/motion/tilt-card";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DestinationsPage() {
  const { destinations } = destinationsContent;

  return (
    <>
      <DestinationsHero />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid gap-8 lg:grid-cols-2">
            {destinations.map((dest) => (
              <StaggerItem key={dest.id}>
                <TiltCard>
                  <SpotlightCard className="overflow-hidden p-0">
                    <Link href={`/destinations/${dest.id}`} className="group block">
                      <div className="relative h-56" data-cursor-dark>
                        <Image
                          src={dest.image}
                          alt={dest.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10" />
                        <div className="absolute inset-x-0 bottom-0 p-8">
                          <h2 className="font-display text-3xl font-bold text-white">
                            {dest.name}
                          </h2>
                          <p className="mt-1 text-sm font-semibold text-teal">
                            {dest.tagline}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col p-8">
                        <p className="leading-relaxed text-muted-foreground">
                          {dest.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="outline">{dest.tuitionPerYear}</Badge>
                          {dest.livingExpenses[0] ? (
                            <Badge variant="outline">
                              Living from {dest.livingExpenses[0].amount}
                            </Badge>
                          ) : null}
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {dest.highlights.map((h) => (
                            <Badge key={h} variant="accent">
                              {h}
                            </Badge>
                          ))}
                        </div>
                        <span className="mt-6 inline-flex items-center text-sm font-semibold text-foreground transition-transform group-hover:translate-x-1">
                          Explore {dest.name}
                          <ArrowRight className="ml-1.5 h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </SpotlightCard>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal className="mt-14 text-center">
            <Button asChild variant="accent" size="lg" data-cursor-accent className="group shadow-lg shadow-teal/20">
              <Link href="/contact">
                Start Your Application
                <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
