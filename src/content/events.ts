/**
 * Add upcoming fairs and events here. Leave empty until dates are confirmed.
 */
export type EventItem = {
  id: string;
  name: string;
  startDate: string;
  endDate?: string;
  location?: string;
  participateUrl: string;
  participateLabel?: string;
};

export const eventsContent = {
  hero: {
    label: "Events",
    title: "Education fairs & open days",
    description:
      "Fair dates and in-person opportunities to meet the HorizonPath team — separate from our blogs and long-form guides.",
  },
  empty: {
    title: "No upcoming events scheduled",
    body: "We publish fair dates and open days here as they are confirmed. Check back soon, or contact us to hear about the next event in your city.",
  },
  events: [] as EventItem[],
};
