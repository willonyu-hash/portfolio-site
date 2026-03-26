export type MediaAsset = {
  src: string;
  alt: string;
  caption?: string;
};

export type VideoAsset = {
  type: "local" | "external";
  src: string;
  title: string;
  poster?: string;
};

export type ShowcaseItem = {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  role: string;
  summary: string;
  details: string[];
  tags: string[];
  coverImage: MediaAsset;
  gallery: MediaAsset[];
  video?: VideoAsset;
  featured: boolean;
};

export type ProfileContent = {
  name: string;
  englishName: string;
  headline: string;
  currentTitle: string;
  location: string;
  intro: string;
  statement: string;
  bio: string[];
  expertise: string[];
  quickFacts: Array<{
    label: string;
    value: string;
  }>;
  heroMedia: MediaAsset;
};

export type ContactContent = {
  email: string;
  note: string;
  resumePath: string;
  resumeLabel: string;
  links: Array<{
    label: string;
    value: string;
    href: string;
  }>;
};
