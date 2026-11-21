"use client"

import { useState } from "react"
import { FragranceCard } from "./fragrance-card"
import type { Fragrance } from "@/types/fragrance"
import { Toggle } from "@/components/ui/toggle"
import { Heart } from "lucide-react"

type User = "Brian" | "Cathy"

type FragranceFilters = {
  brand?: string
  accord?: string
  character?: string
  likedBy?: User[]
}

function filterFragrances(
  fragrances: Fragrance[],
  filters: FragranceFilters
): Fragrance[] {
  return fragrances.filter((fragrance) => {
    if (filters.brand && fragrance.brand !== filters.brand) {
      return false
    }

    if (filters.accord && !fragrance.accords.includes(filters.accord)) {
      return false
    }

    if (
      filters.character &&
      !fragrance.character?.includes(filters.character)
    ) {
      return false
    }

    if (
      filters.likedBy &&
      !filters.likedBy.every((user) =>
        fragrance.reviews?.some(
          (review) => review.user === user && review.liked === true
        )
      )
    ) {
      return false
    }

    return true
  })
}

export function FragranceList({ fragrances }: { fragrances: Fragrance[] }) {
  const [activeFilters, setActiveFilters] = useState<FragranceFilters>({})

  function toggleLikedBy(user: User) {
    setActiveFilters((prev) => {
      const likedBy = prev.likedBy ?? []

      return {
        ...prev,
        likedBy: likedBy.includes(user)
          ? likedBy.filter((u) => u !== user)
          : [...likedBy, user],
      }
    })
  }

  const filteredFragrances = filterFragrances(fragrances, activeFilters)

  return (
    <div className="flex w-full max-w-3xl flex-col gap-4">
      <div className="flex flex-row gap-2">
        <Toggle
          variant="outline"
          size="sm"
          pressed={activeFilters.likedBy?.includes("Brian") ?? false}
          onPressedChange={() => toggleLikedBy("Brian")}
        >
          <Heart className="group-aria-pressed/toggle:fill-foreground" />
          Liked by Brian
        </Toggle>

        <Toggle
          variant="outline"
          size="sm"
          pressed={activeFilters.likedBy?.includes("Cathy") ?? false}
          onPressedChange={() => toggleLikedBy("Cathy")}
        >
          <Heart className="group-aria-pressed/toggle:fill-foreground" />
          Liked by Cathy
        </Toggle>
      </div>

      {filteredFragrances.map((fragrance) => (
        <FragranceCard key={fragrance.id} {...fragrance} />
      ))}
    </div>
  )
}
