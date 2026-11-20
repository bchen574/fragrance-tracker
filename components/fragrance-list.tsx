import { FragranceCard } from "./fragrance-card" 
import type { Fragrance} from '@/types/fragrance';



type FragranceFilters = {
  brand?: string
  accord?: string
  character?: string
  liked?: boolean
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
      filters.liked !== undefined &&
      !fragrance.reviews?.some((review) => review.liked === filters.liked)
    ) {
      return false
    }

    return true
  })
}


export  function FragranceList({fragrances , filters = {} }: { fragrances: Fragrance[] , filters?: FragranceFilters } ) {

    const filteredFragrances = filterFragrances(fragrances, filters) 

    return (
        <div className="flex w-full max-w-3xl flex-col gap-4">
        {filteredFragrances.map((fragrance) => (
          <FragranceCard key={fragrance.id} {...fragrance} />
        ))}
      </div>

    )
}