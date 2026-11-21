import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { Fragrance } from "@/types/fragrance"

import { Badge } from "@/components/ui/badge"

import { SquarePen, Layers, Drama, Heart } from "lucide-react"
import type { Review } from "../types/fragrance"

type FragranceAttributeType = "accord" | "character"

function FragranceAttributeIcon({ type }: { type: FragranceAttributeType }) {
  const iconStyling = "h-5 p-1 text-muted-foreground"

  if (type === "character") {
    return <Drama className={iconStyling} />
  }

  if (type === "accord") {
    return <Layers className={iconStyling} />
  }
}

function FragranceAttributeList({
  type,
  values,
}: {
  type: "accord" | "character"
  values?: string[]
}) {
  if (!values?.length) return null

  return (
    <div className="flex flex-row flex-wrap">
      <FragranceAttributeIcon type={type} />
      {values.map((value) => (
        <Badge
          key={value}
          variant={type === "character" ? "secondary" : "outline"}
        >
          {value}
        </Badge>
      ))}
    </div>
  )
}

function FragranceReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <Separator />
      <div className="flex flex-row flex-wrap gap-x-5 gap-y-2 pt-1">
        {reviews.map((review) => (
          <div className="flex flex-row gap-1" key={review.user}>
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">
                {review.user}:
              </span>{" "}
              {review.text}
            </p>

            {review.liked && (
              <div className="flex h-5 flex-col justify-center">
                <Heart className="size-3 fill-rose-600 text-rose-600" />
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
  character,
}: Fragrance) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col gap-3">
          <div className="align-center flex flex-row gap-1">
            <h4 className="pb-1 font-medium">{name}</h4>
            <h4>·</h4>
            <h4 className="text-muted-foreground">{brand}</h4>
          </div>

          <div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
            <FragranceAttributeList type="character" values={character} />
            <FragranceAttributeList type="accord" values={accords} />
          </div>
        </div>

        <CardAction>
          <Button variant="ghost" className="text-gray-500" size="sm">
            <SquarePen />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {reviews && <FragranceReviewList reviews={reviews} />}
      </CardContent>
    </Card>
  )
}
