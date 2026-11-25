import { useQuery } from "@tanstack/react-query"
import { getAccords } from "@/lib/accords"

export function useAccords() {
  return useQuery({
    queryKey: ["accords"],
    queryFn: getAccords,
    staleTime: Infinity,
  })
}
