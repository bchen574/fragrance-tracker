"use client"

import { FragranceList } from "@/components/fragrance-list"

import { useFragrances } from "@/hooks/use-fragrances"

export default function Page() {
  const { data: fragrances = [] } = useFragrances()

  return (
    <div className="flex min-h-svh w-full flex-col items-center p-6">
      <FragranceList fragrances={fragrances} />
    </div>
  )
}
