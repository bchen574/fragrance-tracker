export type Fragrance = {
  id: number
  brand: string
  name: string
  accords: string[]
  character?: string[]
  review?: { user: string; text: string }[]
}
