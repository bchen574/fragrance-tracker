
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
  likedBy?: User
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
      !fragrance.reviews?.some(
        (review) =>
          review.user === filters.likedBy && review.liked === true
      )
    ) {
      return false
    }

    return true
  })
}

export function FragranceList({
  fragrances,
  filters = {},
}: {
  fragrances: Fragrance[]
  filters?: FragranceFilters
}) {
  const [likedBy, setLikedBy] = useState<User | undefined>(
    undefined
  )

  function toggleUser(user: User) {
    setLikedBy((prev) => (prev === user ? undefined : user))
  }

  const filteredFragrances = filterFragrances(fragrances, {
    ...filters,
    likedBy,
  })

  return (
    <div className="flex w-full max-w-3xl flex-col gap-4">
      <div className="flex flex-row gap-2">
        <Toggle
          variant="outline"
          size="sm"
          pressed={likedBy === "Brian"}
          onPressedChange={() => toggleUser("Brian")}
        >
          <Heart className="group-aria-pressed/toggle:fill-foreground" />
          Liked by Brian
        </Toggle>

        <Toggle
          variant="outline"
          size="sm"
          pressed={likedBy === "Cathy"}
          onPressedChange={() => toggleUser("Cathy")}
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
