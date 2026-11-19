import type { Fragrance } from "@/types/fragrance"

export const fragrances: Fragrance[] = [
  {
    id: 1,
    brand: "Byredo",
    name: "Mojave Ghost",
    accords: ["Floral", "Powdery", "Woody", "Violet", "Musky"],
    character: ["Mysterious", "Ethereal"],
    review: [
      { user: "Brian", text: "Fav ever wow yes amazing 😲" },
      { user: "Cathy", text: "Also think is good." },
    ],
  },
  {
    id: 2,
    brand: "Le Labo",
    name: "Santal 33",
    accords: ["Woody", "Leather", "Spicy"],
    review: [{ user: "Brian", text: "Good, but a bit a lil NPC." }],
  },
]
