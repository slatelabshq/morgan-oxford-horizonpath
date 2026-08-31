export type LivingExpenseRow = {
  region: string;
  amount: string;
};

export type DestinationStory = {
  title: string;
  body: string;
};

export type Destination = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  narrative: string;
  image: string;
  highlights: string[];
  tuitionPerYear: string;
  livingExpenses: LivingExpenseRow[];
  stories: DestinationStory[];
};

export const destinationsContent = {
  hero: {
    label: "Destinations",
    title: "Study where ambition meets opportunity",
    description:
      "We place students at leading universities across all continents",
  },
  destinations: [
    {
      id: "uk",
      name: "United Kingdom",
      tagline: "Centuries of academic excellence",
      description:
        "Home to Oxford, Cambridge, and the Russell Group — the UK offers rigorous degrees, shorter programme lengths, and a globally respected qualification framework.",
      narrative:
        "The UK remains one of the most searched destinations for Nigerian and international families — from Russell Group universities to specialist post-1992 institutions with strong industry links. We help students navigate UCAS, personal statements, and the cultural shift of studying in England, Scotland, or Wales, with realistic guidance on tuition and living costs before applications go in.",
      image: "/stock/uk.jpg",
      highlights: [
        "Russell Group & post-1992 universities",
        "One-year master's programmes",
        "Rich cultural & historical heritage",
      ],
      tuitionPerYear: "From ~£25,000+",
      livingExpenses: [
        { region: "London", amount: "~$13,900" },
        { region: "Elsewhere", amount: "~$11,700" },
      ],
      stories: [
        {
          title: "Russell Group pathways",
          body: "We place students into universities where their subject choice and academic profile align with admissions expectations — not just where the name recognition is highest.",
        },
        {
          title: "Beyond London",
          body: "Manchester, Edinburgh, and other student cities often offer stronger value on living costs while still delivering world-class degrees and graduate outcomes.",
        },
      ],
    },
    {
      id: "canada",
      name: "Canada",
      tagline: "Quality education, welcoming communities",
      description:
        "Canada combines world-ranked research universities with a multicultural society and clear post-study work pathways.",
      narrative:
        "Canada is increasingly popular with families who want North American credentials, post-graduation work permits, and inclusive campus cultures — often at a lower total cost than comparable US cities. We advise on provincial systems, English-language requirements, and which universities match your budget and career goals.",
      image: "/stock/canada.jpg",
      highlights: [
        "Post-graduation work permits",
        "Affordable tuition vs. US/UK peers",
        "Safe, inclusive student cities",
      ],
      tuitionPerYear: "From ~C$25,000+",
      livingExpenses: [{ region: "Typical range", amount: "~$20,000–$25,000 CAD" }],
      stories: [
        {
          title: "Toronto to the prairies",
          body: "From U of T and McGill to strong regional universities, we shortlist institutions where your programme, budget, and post-study plans line up.",
        },
        {
          title: "Work after graduation",
          body: "For many families, Canada's PGWP pathway is as important as the degree itself — we factor that into destination advice from the first conversation.",
        },
      ],
    },
    {
      id: "usa",
      name: "United States",
      tagline: "Innovation at the world's top institutions",
      description:
        "From the Ivy League to leading state universities, the US offers unparalleled breadth of programmes and research opportunity.",
      narrative:
        "The US application landscape is wide — liberal arts colleges, large state flagships, and specialist institutes each suit different students. We help families understand SAT/ACT expectations, financial aid realities, and which campuses offer genuine fit beyond the rankings.",
      image: "/stock/usa.jpg",
      highlights: [
        "Liberal arts & specialised majors",
        "Generous scholarship opportunities",
        "OPT & career pathways",
      ],
      tuitionPerYear: "From ~$25,000+",
      livingExpenses: [
        { region: "LA / NY / DC / TX", amount: "~$22,000–$27,000" },
        { region: "Boston", amount: "~$20,000–$24,000" },
        { region: "Elsewhere", amount: "~$17,000–$22,000" },
      ],
      stories: [
        {
          title: "Scholarship strategy",
          body: "We identify universities where merit aid and programme strength overlap — so families are not paying sticker price without a plan.",
        },
        {
          title: "OPT and career routes",
          body: "For students weighing long-term US opportunity, we factor OPT eligibility and internship culture into the shortlist, not just admission odds.",
        },
      ],
    },
    {
      id: "europe",
      name: "Rest of Europe and Beyond",
      tagline: "Wider horizons, borderless learning",
      description:
        "From the Netherlands, Germany, and Ireland to destinations further afield — affordable options and English-taught programmes.",
      narrative:
        "Beyond the UK, Europe offers English-taught bachelor's and master's programmes, often at lower living costs than London or major US metros. We advise on Ireland, the Netherlands, Germany, and other destinations where HorizonPath has active placement experience.",
      image: "/stock/europe.jpg",
      highlights: [
        "English-taught bachelor's & master's",
        "Affordable tuition in many countries",
        "Schengen travel & cultural immersion",
      ],
      tuitionPerYear: "From ~€25,000+",
      livingExpenses: [{ region: "Typical range", amount: "~€7,000–€11,000" }],
      stories: [
        {
          title: "Netherlands & Ireland",
          body: "Popular first choices for English-medium degrees with straightforward admissions and strong international student communities.",
        },
        {
          title: "Germany & beyond",
          body: "For budget-conscious families, we map tuition-free or low-fee public universities against language requirements and programme fit.",
        },
      ],
    },
  ] satisfies Destination[],
};

export function getDestinationById(id: string): Destination | undefined {
  return destinationsContent.destinations.find((d) => d.id === id);
}

export const destinationIds = destinationsContent.destinations.map((d) => d.id);
