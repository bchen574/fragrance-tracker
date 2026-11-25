import { FragranceCard } from "@/components/fragrance-card"
import { getFragrances } from "@/lib/fragrances"
import { FragranceList } from "@/components/fragrance-list"
import { getAccords } from "@/lib/accords"
import { getAccordCategories } from "@/lib/accords"

export default async function Page() {
  const fragrances = await getFragrances()
  const accords = await getAccords()
  const accordCategories = await getAccordCategories()

  return (
    <div className="flex min-h-svh w-full flex-col items-center p-6">
      <FragranceList fragrances={fragrances} />
    </div>
  )
}
