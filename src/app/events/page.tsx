import type { Metadata } from "next";
import { EventsHero, EventsListSection } from "@/components/sections/events-section";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Education fairs, open days and in-person dates with HorizonPath Education — separate from our blogs.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsListSection />
    </>
  );
}
