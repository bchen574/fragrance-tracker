import { supabase } from "./supabase"

import type { Accord, AccordCategory } from "@/types/accord"

type AccordsRow = {
  id: number
  name: string
  accord_categories: { name: string }
}

export async function getAccords(): Promise<Accord[]> {
  const { data, error } = await supabase
    .from("accords")
    .select(
      `
    id,
    name,
    accord_categories (name)
  `
    )
    .order("id")
    .overrideTypes<AccordsRow[]>()

  if (error) {
    throw new Error(error.message)
  }

  return data.map((accords) => ({
    id: accords.id,
    name: accords.name,
    category: accords.accord_categories.name,
  }))
}

export async function getAccordCategories(): Promise<AccordCategory[]> {
  const { data, error } = await supabase
    .from("accord_categories")
    .select(
      `
    id,
    name
  `
    )
    .order("id")
    .overrideTypes<AccordCategory[]>()
  console.log(JSON.stringify(data, null, 2))

  if (error) {
    throw new Error(error.message)
  }

  return data
}
