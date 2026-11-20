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

import { SquarePen, Palette, Layers, Drama, Heart } from "lucide-react"

export function FragranceCard({
  brand,
  name,
  accords,
  reviews,
  character,
}: Fragrance) {
  return (
    <Card className="w-full shadow-sm">
      <CardHeader>
        <div className="flex flex-col gap-3">
          <div className="align-center flex flex-row gap-1">
            <h4 className="font-medium">{name}</h4>
            <h4>·</h4>
            <h4 className="text-muted-foreground">{brand}</h4>
          </div>

          <div className="flex flex-col gap-x-6 gap-y-2">
            {accords && (
              <div className="flex flex-row items-start gap-2">
                <Layers className="w-4 text-muted-foreground" />
                <div className="flex flex-1 flex-row flex-wrap gap-x-2 gap-y-2">
                  {accords.map((accord) => (
                    <Badge key={accord} variant="secondary">
                      {accord}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {character && (
              <div className="flex flex-row items-start gap-2">
                <Drama className="w-4 text-muted-foreground" />
                <div className="flex flex-1 flex-row flex-wrap gap-x-2 gap-y-2">
                  {character?.map((char) => (
                    <Badge key={char} variant="secondary">
                      {char}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <CardAction>
          <Button variant="ghost" className="text-gray-500">
            <SquarePen />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {reviews && (
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

                  <div className="flex h-5 flex-col justify-center">
                    <Heart
                      className={`size-3 shrink-0 ${
                        review.liked
                          ? "fill-rose-400 text-red-500"
                          : "fill-secondary text-muted-foreground"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
