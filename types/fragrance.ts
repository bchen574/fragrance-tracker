export type Fragrance = {
  id: number
  brand: string
  name: string
  accords: string[]
  character?: string[]
  reviews?: { user: string; text: string; liked: boolean | null }[]
}
