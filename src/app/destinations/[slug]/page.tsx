import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinationIds, getDestinationById } from "@/content/destinations";
import { DestinationDetailSection } from "@/components/sections/destination-detail";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return destinationIds.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationById(slug);
  if (!destination) return { title: "Destination not found" };

  return {
    title: destination.name,
    description: destination.narrative.slice(0, 155),
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationById(slug);
  if (!destination) notFound();

  return <DestinationDetailSection destination={destination} />;
}
