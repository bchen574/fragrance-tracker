import { FragranceCard } from "@/components/fragrance-card"
import { getFragrances } from "@/lib/fragrances"
import { FragranceList } from "@/components/fragrance-list"

export default async function Page() {
  const fragrances = await getFragrances()

  return (
    <div className="flex min-h-svh w-full flex-col items-center p-6">
      <FragranceList fragrances={fragrances} />
    </div>
  )
}
