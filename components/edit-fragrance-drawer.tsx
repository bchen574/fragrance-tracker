import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useForm, Controller } from "react-hook-form"
import { Check } from "lucide-react"

import { useState } from "react"
import { Separator } from "./ui/separator"

import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import type { Accord } from "@/types/accord"
import { useAccords } from "@/hooks/use-accords"
import type { Fragrance } from "@/types/fragrance"
import { SquarePen } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useUpdateFragranceAccords } from "@/hooks/use-update-fragrance-accords"
import { toast } from "sonner"

function EditAccords({
  title,
  accords,
  value,
  onChange,
}: {
  title: string
  accords: Accord[]
  value: number[]
  onChange: (value: number[]) => void
}) {
  const accordsGrouped = Object.groupBy(accords, (accord) => accord.category)

  return (
    <div>
      <h1 className="text-md pb-2 font-medium">{title}</h1>

      <div className="flex flex-col">
        <ToggleGroup
          multiple
          variant="outline"
          size="sm"
          value={value.map(String)}
          onValueChange={(values) => onChange(values.map(Number))}
          className="flex w-full flex-col items-start"
        >
          {Object.entries(accordsGrouped).map(([accordGroup, accords]) => (
            <div key={accordGroup} className="py-2">
              <h2 className="mb-2 text-xs font-medium text-muted-foreground">
                {accordGroup}
              </h2>
              <div className="flex flex-row flex-wrap gap-2">
                {accords?.map((accord) => (
                  <ToggleGroupItem
                    key={accord.id}
                    variant="outline"
                    size="sm"
                    className="group rounded-full data-pressed:bg-foreground data-pressed:text-background"
                    value={String(accord.id)}
                  >
                    {accord.name}
                    <Check className="hidden text-background group-aria-pressed:block" />
                  </ToggleGroupItem>
                ))}
              </div>
            </div>
          ))}
        </ToggleGroup>
      </div>
    </div>
  )
}

export function EditFragranceDrawer({
  id,
  name,
  brand,
  accords,
}: {
  id: number
  name: string
  brand: string
  accords: Fragrance["accords"]
  characters: Fragrance["characters"]
}) {
  const { data: allAccords = [] } = useAccords()
  const [open, setOpen] = useState(false)

  const form = useForm({
    defaultValues: {
      accords: accords.map((accord) => accord.id),
    },
  })

  const mutation = useUpdateFragranceAccords()

  function onSubmit(data: { accords: number[] }) {
    mutation.mutate(
      {
        fragranceId: id,
        accordIds: data.accords,
      },
      {
        onSuccess: () => {
          form.reset(data)
          toast.success("Fragrance updated.", { position: "top-center" })
          setOpen(false)
        },
        onError: () => {
          toast.error("Failed to update fragrance")
        },
      }
    )
  }

  return (
    <Drawer
      swipeDirection="right"
      onOpenChange={(open) => {
        setOpen(open)
        if (!open) form.reset()
      }}
      open={open}
    >
      <DrawerTrigger
        render={<Button variant="ghost" className="text-gray-500" size="sm" />}
      >
        <SquarePen />
      </DrawerTrigger>

      <DrawerContent className="w-150">
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex flex-row items-center gap-1 pb-3">
              <h4 className="font-medium">{name}</h4>
              <h4>·</h4>
              <h4 className="text-muted-foreground">{brand}</h4>
            </div>
            <Separator />
          </DrawerTitle>
        </DrawerHeader>

        <div className="p-4">
          <Controller
            control={form.control}
            name="accords"
            render={({ field }) => (
              <EditAccords
                title="Accords"
                accords={allAccords}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <DrawerFooter>
          <div className="flex flex-row gap-2">
            <DrawerClose
              render={
                <Button className="flex-1" variant="secondary" size="lg" />
              }
            >
              Cancel
            </DrawerClose>

            <Button
              type="button"
              variant="default"
              className="flex-1"
              size="lg"
              onClick={form.handleSubmit(onSubmit)}
            >
              Save Changes
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
