import { FragranceCard } from "@/components/fragrance-card"
import { getFragrances } from "@/lib/fragrances"

export default async function Page() {
  const fragrances = await getFragrances()

  console.log(fragrances)

  return (
    <div className="flex min-h-svh w-full flex-col items-center p-6">
      <div className="flex w-full max-w-3xl flex-col gap-4">
        <p>This is a test. If you can see this it works</p>

        {fragrances.map((fragrance) => (
          <FragranceCard key={fragrance.id} {...fragrance} />
        ))}
      </div>
    </div>
  )
}
