import { useQuery } from "@tanstack/react-query"
import { getFragrances } from "../lib/fragrances"

export function useFragrances() {
  return useQuery({
    queryKey: ["fragranceList"],
    queryFn: getFragrances,
  })
}
