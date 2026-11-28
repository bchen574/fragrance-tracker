import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateFragranceAccords } from "@/lib/fragrances"

export function useUpdateFragranceAccords() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({
      fragranceId,
      accordIds,
    }: {
      fragranceId: number
      accordIds: number[]
    }) => updateFragranceAccords(fragranceId, accordIds),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["fragranceList"],
      }),
  })
}
