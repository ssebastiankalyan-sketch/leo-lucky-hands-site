import talentData from "@/data/talent.json";

export type Talent = {
  slug: string;
  name: string;
  type: "Actress" | "Model";
  photo: string;
  followers: string;
  languages: string;
  instagram: string;
  price: string;
  description: string;
  gallery: string[];
  videos: string[];
};

export const talent = talentData as Talent[];
export const actresses = talent.filter((item) => item.type === "Actress");
export const models = talent.filter((item) => item.type === "Model");
export function getTalent(slug: string) {
  return talent.find((item) => item.slug === slug);
}
