export type Testimonial = {
  id: string;
  name: string;
  role: string;
  destination: string;
  programme: string;
  quote: string;
  outcome: string;
};

export const successStoriesContent = {
  hero: {
    label: "Success Stories",
    title: "Real students. Real outcomes.",
    description:
      "Every placement represents a personal journey — from first conversation to acceptance letter. Here are some of the pathways we've helped students achieve.",
  },
  testimonials: [
    {
      id: "amara",
      name: "Amara O.",
      role: "MSc Data Science Graduate",
      destination: "United Kingdom",
      programme: "Postgraduate Admissions",
      quote:
        "HorizonPath didn't just help me apply — they helped me understand which programmes genuinely matched my career goals. I received offers from three Russell Group universities and chose the one that felt right.",
      outcome: "Offer from University of Manchester — MSc Data Science",
    },
    {
      id: "chukwudi",
      name: "Chukwudi N.",
      role: "Undergraduate Student",
      destination: "Canada",
      programme: "Foundation & Undergraduate",
      quote:
        "Coming from a Nigerian secondary school, I was overwhelmed by the application process. My advisor broke everything into clear steps and I had my foundation offer within eight weeks.",
      outcome: "Enrolled at University of Toronto — International Foundation",
    },
    {
      id: "zainab",
      name: "Zainab H.",
      role: "MBA Candidate",
      destination: "United States",
      programme: "Postgraduate Admissions",
      quote:
        "The personal statement coaching was transformative. They pushed me to tell my story authentically, and I secured a partial scholarship I didn't think was possible.",
      outcome: "Scholarship offer — Northeastern University MBA",
    },
    {
      id: "olamide",
      name: "Olamide B.",
      role: "Professional",
      destination: "Europe",
      programme: "Short Course & Certification",
      quote:
        "I needed a focused programme that wouldn't take me away from work for too long. HorizonPath found a four-week executive course in Amsterdam that was exactly what I needed.",
      outcome: "Completed Executive Leadership Programme — Bocconi",
    },
    {
      id: "adaeze",
      name: "Adaeze I.",
      role: "Nursing Student",
      destination: "Ireland",
      programme: "Undergraduate Admissions",
      quote:
        "My parents were nervous about sending me abroad, but HorizonPath walked us through every requirement — from WAEC verification to visa documentation. I started my BSc Nursing in Dublin with complete confidence.",
      outcome: "Offer from Trinity College Dublin — BSc Nursing",
    },
    {
      id: "ibrahim",
      name: "Ibrahim S.",
      role: "Computer Science Student",
      destination: "Malaysia",
      programme: "Undergraduate Admissions",
      quote:
        "I wanted a quality degree at an affordable cost. They compared programmes across three countries and helped me choose a university in Kuala Lumpur with strong industry links and a straightforward visa process.",
      outcome: "Enrolled at Universiti Malaya — BSc Computer Science",
    },
    {
      id: "folake",
      name: "Folake D.",
      role: "Law Graduate",
      destination: "United Kingdom",
      programme: "Postgraduate Admissions",
      quote:
        "After my LLB in Lagos, I wasn't sure which UK law schools would recognise my qualifications. HorizonPath matched me with programmes that accepted my degree and coached me through the LPC application.",
      outcome: "Offer from University of Leeds — LLM International Law",
    },
    {
      id: "emeka",
      name: "Emeka A.",
      role: "Engineering Student",
      destination: "Australia",
      programme: "Postgraduate Admissions",
      quote:
        "The GTE statement was the part that worried me most. My consultant helped me draft a clear, honest narrative and I received my student visa without a single request for more documents.",
      outcome: "Enrolled at University of Melbourne — MEng Mechanical Engineering",
    },
  ] satisfies Testimonial[],
};
