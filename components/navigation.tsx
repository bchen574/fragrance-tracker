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
    <div className="sticky top-0 z-50 flex w-full flex-row items-center border-b bg-card px-3 pt-3 pb-2">
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
