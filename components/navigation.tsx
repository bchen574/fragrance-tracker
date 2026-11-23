import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import Link from "next/link"

export function Navigation() {
  return (
    <div className="py- mt-2 flex w-full max-w-5xl flex-row rounded-lg border bg-card px-2 py-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>Fragrances</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>AI Taste Analysis</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Brian</NavigationMenuLink>
              <NavigationMenuLink>Cathy</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
