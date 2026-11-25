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

import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import type { Accord } from "@/types/accord"
import { useAccords } from "@/hooks/use-accords"

function EditAccords({ title, accords }: { title: string; accords: Accord[] }) {
  return (
    <div>
      <h1 className="text-md pb-4 font-medium">{title}</h1>
      <div className="flex flex-row flex-wrap gap-2">
        {accords.map((accord) => (
          <Toggle
            key={accord.id}
            variant="outline"
            className="group rounded-full data-pressed:bg-foreground data-pressed:text-background"
          >
            {accord.name}
            <Check className="hidden text-background group-aria-pressed:block" />
          </Toggle>
        ))}
      </div>
    </div>
  )
}

export function EditFragranceDrawer({
  name,
  brand,
}: {
  name: string
  brand: string
}) {
  const { data: allAccords = [] } = useAccords()
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>
          <div className="align-center 0 flex flex-row gap-1">
            <h4 className="font-medium">{name}</h4>
            <h4>·</h4>
            <h4 className="text-muted-foreground">{brand}</h4>
          </div>
        </DrawerTitle>
      </DrawerHeader>

      <div className="p-4">
        <EditAccords title="Accords" accords={allAccords} />
      </div>

      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose render={<Button />}>Cancel</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  )
}
