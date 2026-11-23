export type RichPart = string | { href: string; label: string };

export type TextField = {
  kind: "text" | "email" | "tel" | "number" | "date";
  name: string;
  label: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
  min?: number;
  max?: number;
  placeholder?: string;
};

export type SelectField = {
  kind: "select";
  name: string;
  label: string;
  required?: boolean;
  placeholder: string;
  options: string[];
};

export type TextareaField = {
  kind: "textarea";
  name: string;
  label: string;
  required?: boolean;
  maxLength?: number;
  rows?: number;
  hint?: string;
};

export type ChecksField = {
  kind: "checks";
  name: string;
  legend: string;
  hint: string;
  options: string[];
};

export type FormField = TextField | SelectField | TextareaField | ChecksField;

export type DraftFormContent = {
  id: string;
  filename: string;
  note: string;
  submitLabel: string;
  fields: FormField[];
};

export const site = {
  name: "Stalwyn Workforce",
  title: "UK Staffing and Recruitment Agency | Stalwyn Workforce",
  description:
    "Stalwyn Workforce supplies temporary and seasonal teams, permanent hires and ad hoc shift cover for UK businesses across logistics, industrial, admin, cleaning and venue work.",
  shortDescription:
    "UK staffing and recruitment. Temporary, seasonal, permanent and ad hoc cover, matched to the duties on site.",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#employers", label: "Employers" },
  { href: "#jobseekers", label: "Jobseekers" },
] as const;

export const hero = {
  title: "Staffing and recruitment for UK businesses",
  summary:
    "Temporary and seasonal teams, permanent hires and short-notice shift cover. Every brief is built around the roles, sites and shift patterns you need filled.",
  primary: { href: "#employers", label: "Find staff" },
  secondary: { href: "#jobseekers", label: "Apply for work" },
  image: {
    src: "/images/warehouse.webp",
    sizes: "(max-width: 820px) calc(100vw - 40px), (max-width: 1260px) 45vw, 560px",
    alt: "Warehouse operative walking across a distribution floor",
    width: 1280,
    height: 720,
  },
};

export const services = [
  {
    id: "service-temporary",
    title: "Temporary & Seasonal Staffing",
    summary:
      "Planned cover for peak periods, short projects and known absences, with duties and shift times agreed before people start.",
  },
  {
    id: "service-permanent",
    title: "Permanent Recruitment",
    summary:
      "Search, shortlisting and interview coordination for hires you want to keep, judged against the duties and experience the role needs.",
  },
  {
    id: "service-ad-hoc",
    title: "Ad Hoc Staffing",
    summary:
      "Cover for a named shift, an unexpected absence or a gap that cannot wait for a full recruitment process.",
  },
] as const;

export const difference = {
  title: "A dedicated staffing team",
  summary:
    "You work with the same small team on your account. We agree the skills, shift patterns and headcount with you, then change the plan when sites, volumes or start dates move.",
};

export const industries = [
  {
    title: "Light Industrial",
    summary: "Production, assembly, picking and packing.",
  },
  {
    title: "Trucking & Transport",
    summary: "HGV driving and transport-yard operations.",
  },
  {
    title: "Third-Party Logistics (3PL)",
    summary: "Goods-in, inventory, fulfilment and dispatch.",
  },
  {
    title: "Administrative Roles",
    summary: "Reception, office support and data entry.",
  },
  {
    title: "Non-Clinical Assignments",
    summary:
      "Reception, scheduling and operational support in healthcare settings. Not clinical care.",
  },
  {
    title: "Cleaning Staff",
    summary: "Commercial, facilities and site cleaning.",
  },
  {
    title: "Events & Venues",
    summary:
      "Set-up, guest welcome and floor support for event companies, sports grounds and concert venues.",
  },
] as const;

export const industryOptions = [...industries.map((item) => item.title), "Other"];

export const roles = [
  {
    src: "/images/photo-events.webp",
    alt: "Event staff preparing a concert venue concourse",
    caption: "Event set-up, welcome and venue support",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/photo-transport.webp",
    alt: "HGV driver beside a lorry in a transport yard",
    caption: "HGV driving and yard operations",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/photo-office.webp",
    alt: "Reception professional taking a call at an office desk",
    caption: "Reception, admin and office support",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/photo-cleaning.webp",
    alt: "Cleaning operative wiping a desk in a commercial office",
    caption: "Commercial and facilities cleaning",
    width: 1200,
    height: 800,
  },
] as const;

const dutyOptions = [
  "HGV driving",
  "Food or drink production, packing or labelling",
  "Cleaning food production lines or equipment",
  "Event security, searches or refusing entry",
  "Personal care",
];

const draftNote =
  "This stays on your device. Submitting downloads a text draft — nothing is sent to a server.";

export const employerEnquiry = {
  id: "employers",
  title: "Business enquiry",
  intro:
    "Tell us the duties, the site and when you need people. A precise brief is what we match against.",
  form: {
    id: "employer-form",
    filename: "stalwyn-staffing-enquiry",
    note: draftNote,
    submitLabel: "Download enquiry draft",
    fields: [
      {
        kind: "text",
        name: "Company name",
        label: "Company name",
        required: true,
        autoComplete: "organization",
        maxLength: 120,
      },
      {
        kind: "text",
        name: "Contact name",
        label: "Contact name",
        required: true,
        autoComplete: "name",
        maxLength: 100,
      },
      {
        kind: "email",
        name: "Work email",
        label: "Work email",
        required: true,
        autoComplete: "email",
        maxLength: 150,
      },
      {
        kind: "tel",
        name: "Phone",
        label: "Phone (optional)",
        autoComplete: "tel",
        maxLength: 35,
      },
      {
        kind: "select",
        name: "Staffing service",
        label: "Staffing service",
        required: true,
        placeholder: "Select a service",
        options: services.map((service) => service.title),
      },
      {
        kind: "select",
        name: "Industry",
        label: "Industry",
        required: true,
        placeholder: "Select an area",
        options: industryOptions,
      },
      {
        kind: "text",
        name: "Site town or postcode",
        label: "Site town or postcode",
        required: true,
        maxLength: 90,
      },
      {
        kind: "number",
        name: "Number of people needed",
        label: "Number of people needed",
        required: true,
        min: 1,
        max: 10000,
      },
      {
        kind: "date",
        name: "Preferred start date",
        label: "Preferred start date (optional)",
      },
      {
        kind: "textarea",
        name: "Staff duties",
        label: "What will the staff actually be asked to do?",
        required: true,
        maxLength: 2000,
        rows: 4,
        hint: "Include day-to-day tasks, equipment or licences, and the shifts you need covered.",
      },
      {
        kind: "checks",
        name: "Duties to review",
        legend: "Do any of these duties apply?",
        hint: "Select any that are part of the role. These need a closer look before we propose people.",
        options: dutyOptions,
      },
    ],
  } satisfies DraftFormContent,
};

export const workTypes = [
  "Temporary or seasonal",
  "Permanent",
  "Ad hoc shifts",
  "Open to any",
];

export const candidateApplication = {
  id: "jobseekers",
  title: "Candidate application",
  intro:
    "Tell us the work you want, where you can travel and when you can start. We use this to see which live briefs fit.",
  form: {
    id: "candidate-form",
    filename: "stalwyn-candidate-application",
    note: draftNote,
    submitLabel: "Download application draft",
    fields: [
      {
        kind: "text",
        name: "Full name",
        label: "Full name",
        required: true,
        autoComplete: "name",
        maxLength: 100,
      },
      {
        kind: "email",
        name: "Email",
        label: "Email",
        required: true,
        autoComplete: "email",
        maxLength: 150,
      },
      {
        kind: "tel",
        name: "Phone",
        label: "Phone (optional)",
        autoComplete: "tel",
        maxLength: 35,
      },
      {
        kind: "text",
        name: "Preferred work location",
        label: "Preferred work location",
        required: true,
        maxLength: 90,
      },
      {
        kind: "select",
        name: "Area of work",
        label: "Area of work",
        required: true,
        placeholder: "Select an area",
        options: industryOptions,
      },
      {
        kind: "select",
        name: "Type of work",
        label: "Type of work",
        required: true,
        placeholder: "Select a preference",
        options: workTypes,
      },
      {
        kind: "text",
        name: "Availability",
        label: "Availability",
        required: true,
        maxLength: 160,
        placeholder: "e.g. weekdays, immediately",
      },
      {
        kind: "textarea",
        name: "Relevant experience or qualifications",
        label: "Relevant experience or qualifications (optional)",
        maxLength: 2000,
        rows: 4,
      },
    ],
  } satisfies DraftFormContent,
};

export const faqs: { question: string; answer: RichPart[] }[] = [
  {
    question: "What types of staffing does Stalwyn offer?",
    answer: [
      { href: "#service-temporary", label: "Temporary and seasonal staffing" },
      " for planned cover, ",
      { href: "#service-permanent", label: "permanent recruitment" },
      " for long-term hires, and ",
      { href: "#service-ad-hoc", label: "ad hoc staffing" },
      " for a named shift or a short-notice gap.",
    ],
  },
  {
    question: "Which roles can Stalwyn help fill?",
    answer: [
      "Light industrial, HGV and transport, third-party logistics, administration, non-clinical support, cleaning, and events and venues. The ",
      { href: "#industries", label: "industry list" },
      " shows what each covers. We do not supply clinical care or personal care.",
    ],
  },
  {
    question: "What should I include in a staffing enquiry?",
    answer: [
      "Use the ",
      { href: "#employers", label: "business enquiry form" },
      " to set out the actual duties, site postcode, headcount, shift pattern and start date. Add any equipment, licences or experience the role needs.",
    ],
  },
  {
    question: "How quickly can cover start?",
    answer: [
      "Ad hoc shifts can be lined up once we have the duties, site and headcount. Temporary and permanent work follows the start date on your brief.",
    ],
  },
  {
    question: "Where do you place staff?",
    answer: [
      "We cover sites across the United Kingdom. Include the town or postcode so we can confirm who can reach that location.",
    ],
  },
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EmploymentAgency",
      name: "Stalwyn Workforce",
      description: site.description,
      areaServed: { "@type": "Country", name: "United Kingdom" },
      knowsLanguage: "en-GB",
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          areaServed: "United Kingdom",
        },
      })),
    },
  ],
};
