import { supabase } from "./supabase"
import type { Fragrance } from "@/types/fragrance"

type FragranceRow = {
  id: number
  brand: string
  name: string
  fragrance_accords: {
    accords: { id: number; name: string }
  }[]
  fragrance_characters: {
    characters: { id: number; name: string }
  }[]
  reviews: {
    review: string | null
    like: boolean | null
    users: { name: string }
  }[]
}

export async function getFragrances(): Promise<Fragrance[]> {
  const { data, error } = await supabase
    .from("fragrances")
    .select(
      `
    id,
    brand,
    name,
    fragrance_accords (accords (id, name)),
    fragrance_characters (characters (id, name)),
    reviews (review, like, users (name))
  `
    )
    .order("id")
    .overrideTypes<FragranceRow[]>()

  if (error) {
    throw new Error(error.message)
  }

  return data
    .map((fragrance) => ({
      id: fragrance.id,
      brand: fragrance.brand,
      name: fragrance.name,

      accords: fragrance.fragrance_accords.map((item) => ({
        id: item.accords.id,
        name: item.accords.name,
      })),

      characters: fragrance.fragrance_characters.map((item) => ({
        id: item.characters.id,
        name: item.characters.name,
      })),

      reviews: fragrance.reviews.map((review) => ({
        user: review.users.name,
        text: review.review ?? "",
        liked: review.like,
      })),
    }))
    .sort((a, b) => a.brand.localeCompare(b.brand))
}
