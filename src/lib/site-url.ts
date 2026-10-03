/** Canonical site URL for absolute Open Graph / Twitter image links. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const defaultShareImage = {
  path: "/brand/logo.jpeg",
  width: 1600,
  height: 1600,
  alt: "HorizonPath Education — Your Bridge to Global Universities",
} as const;
