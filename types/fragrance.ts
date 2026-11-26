import type { Accord } from "./accord"
import type { Character } from "./character"

export type Fragrance = {
  id: number
  brand: string
  name: string
  accords: Pick<Accord, "id" | "name">[]
  characters?: Pick<Character, "id" | "name">[]
  reviews?: Review[]
}

export type Review = {
  user: string
  text: string
  liked: boolean | null
}
