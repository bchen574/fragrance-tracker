import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Drawer, DrawerTrigger } from "@/components/ui/drawer"
import { EditFragranceDrawer } from "./edit-fragrance-drawer"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { Fragrance } from "@/types/fragrance"

import { Badge } from "@/components/ui/badge"

import { SquarePen, Layers, Drama, Heart } from "lucide-react"
import type { Review } from "../types/fragrance"

type FragranceAttributeType = "accord" | "character"

type FragranceAttributeListProps =
  | {
      type: "accord"
      values?: Fragrance["accords"]
    }
  | {
      type: "character"
      values?: Fragrance["characters"]
    }

function FragranceAttributeIcon({ type }: { type: FragranceAttributeType }) {
  const iconStyling = "h-5 shrink-0 p-1 text-muted-foreground"

  if (type === "character") {
    return <Drama className={iconStyling} />
  }

  if (type === "accord") {
    return <Layers className={iconStyling} />
  }
}

function FragranceAttributeList(props: FragranceAttributeListProps) {
  if (!props.values?.length) return null

  return (
    <div className="flex flex-row">
      <FragranceAttributeIcon type={props.type} />
      <div className="flex flex-row flex-wrap gap-x-1 gap-y-1">
        {props.type === "accord"
          ? props.values.map((accord) => (
              <Badge key={accord.id} variant="outline">
                {accord.name}
              </Badge>
            ))
          : props.values.map((character) => (
              <Badge key={character.id} variant="outline">
                {character.name}
              </Badge>
            ))}
      </div>
    </div>
  )
}

function FragranceReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex w-full flex-col gap-1">
      <Separator />
      <div className="flex flex-row flex-wrap gap-x-5 gap-y-2 pt-1">
        {reviews.map((review) => (
          <div className="flex flex-row text-xs" key={review.user}>
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">
                {review.user}:
              </span>{" "}
              {review.text}
            </p>

            {review.liked && (
              <div className="flex h-4 flex-col justify-center p-0.5">
                <Heart className="fill-rose-600 text-rose-600" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function FragranceCard({
  brand,
  name,
  accords,
  reviews,
  characters,
}: Fragrance) {
  return (
    <Drawer swipeDirection="right">
      <Card className="w-full gap-1 rounded-sm">
        <CardHeader>
          <div className="flex flex-row flex-wrap gap-x-5 gap-y-4 pb-1">
            <div className="align-center 0 flex flex-row gap-1">
              <h4 className="font-medium">{name}</h4>
              <h4>·</h4>
              <h4 className="text-muted-foreground">{brand}</h4>
            </div>
            <div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
              <FragranceAttributeList type="accord" values={accords} />
              <FragranceAttributeList type="character" values={characters} />
            </div>
          </div>
          <CardAction>
            <EditFragranceDrawer
              name={name}
              brand={brand}
              accords={accords}
              characters={characters}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {reviews && <FragranceReviewList reviews={reviews} />}
        </CardContent>
      </Card>
    </Drawer>
  )
}
