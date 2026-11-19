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

import { SquarePen, Flower, Layers, Drama } from "lucide-react"

export function FragranceCard({
  brand,
  name,
  accords,
  review,
  character,
}: Fragrance) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col gap-3">
          <div className="align-center flex flex-row gap-1">
            <h4 className="font-medium">{name}</h4>
            <h4>·</h4>
            <h4 className="text-muted-foreground">{brand}</h4>
          </div>

          <div className="flex flex-col gap-x-6 gap-y-2">
            {accords && (
              <div className="gapx-x-2 flex flex-wrap items-center gap-2">
                <Layers className="w-3" />
                {accords.map((accord) => (
                  <Badge key={accord} variant="secondary">
                    {accord}
                  </Badge>
                ))}
              </div>
            )}

            {character && (
              <div className="flex flex-wrap items-center gap-2">
                <Drama className="w-3" />
                {character?.map((char) => (
                  <Badge key={char} variant="secondary">
                    {char}
                  </Badge>
                ))}
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
        {review && (
          <div className="flex w-full flex-col gap-2">
            <Separator />
            <div className="flex flex-row gap-5 pt-1">
              {review.map((review) => (
                <div
                  className="flex flex-row items-center gap-1"
                  key={review.user}
                >
                  <div className="font-medium">{review.user}:</div>
                  <p className="text-muted-foreground">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
