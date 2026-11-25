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

import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import type { Accord } from "@/types/accord"

function EditAccords({ title, accords }: { title: string; accords: Accord[] }) {
  return (
    <div>
      <h1>{title}</h1>
      {accords.map((accord) => (
        <Toggle key={accord.id}>{accord.name}</Toggle>
      ))}
    </div>
  )
}

export function EditFragranceDrawer({ allAccords }: { allAccords: Accord[] }) {
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Fragrance Name, Brand</DrawerTitle>
      </DrawerHeader>

      <div className="p-4">
        <EditAccords title="Accords" accords={allAccords} />
      </div>

      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  )
}
