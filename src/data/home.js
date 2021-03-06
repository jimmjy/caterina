export const MAIN_TITLE = {
  name: "Cate Gennaro",
  profession: "Registered Psychotherapist (Qualifying)",
};

export const SERVICES = [
  {
    title: "Anxiety",
    description:
      "While anxiety is a normal part of life, oftentimes, it can escalate to an unmanageable level.",
    link: {
      title: "Read More",
      url: "/services", //look up reach router for going to point in page,
      ref: "Anxiety",
    },
    style: { backgroundColor: "#8E8C89" },
  },
  {
    title: "Depression",
    description:
      "Depression can take root in our bodies and significantly impact our outlook on life in a negative way.",
    link: {
      title: "Read More",
      url: "/services", //look up reach router for going to point in page,
      ref: "Depression",
    },
    style: { backgroundColor: "#BFBBB7" },
  },
  {
    title: "Self-Worth",
    description:
      "Feeling a sense of unworthiness or a lack in confidence has a profound effect on who we are as individuals.",
    link: {
      title: "Read More",
      url: "/services", //look up reach router for going to point in page
      ref: "SelfWorth",
    },
    style: { backgroundColor: "#FEF9C7" },
  },
  {
    title: "Relationships",
    description:
      "Interactions with other people are the cornerstone of our lives. Therapy can help make these interactions more meaningful.",
    link: {
      title: "Read More",
      url: "/services",
      ref: "Relationships",
    },
    style: { backgroundColor: "#CEF6EB" },
  },
  {
    title: "Stress Management",
    description:
      "Left unchecked, stress can impact our physical, mental and emotional health and well-being.",
    link: {
      title: "Read More",
      url: "/services",
    },
    style: { backgroundColor: "#55949C" },
  },
];

export const ABOUT_ME = {
  title: "About Me",
  description: [
    "Hi, I'm Cate.",
    "I am a Registered Psychotherapist (Qualifying) with the College of Registered Psychotherapists of Ontario (CRPO).",
    "I help my clients overcome their challenges in relation to depression, anxiety, self-worth, and other issues affecting their mental health and well-being.",
  ],
  link: {
    title: "Read More",
    url: "/about",
  },
};

export const APPROACH = {
  title: "My Approach",
  link: {
    title: "Read More",
    url: "/approach",
  },
  description:
    "I am here to help you create, connect to, and build a stronger and more authentic version of yourself, using holistic, mindful, and evidence-based practices.",
};

export const GET_HELP = {
  title: "Getting Help",
  description:
    "Connecting with your therapist has never been easier. For your convenience, I offer exclusively virtual therapy in order to reduce travel time and costs, allowing you to access therapy in the comfort of your own home. Extended sessions, as well as coaching services are also available.",
  modes: [
    "Individual Therapy",
    "Extended Sessions Available",
    "Virtual Therapy",
    "Coaching",
    "Tools and Strategies",
  ],
  link: {
    title: "Read More about Fees and Services",
    url: "/fees",
  },
};
