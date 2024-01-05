import * as React from "react"
import Image from "next/image"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

export default function RecipePreviewCard({
  heading,
  cookingTime,
  // rating,
  // saved,
  images,
}: {
  heading: string
  cookingTime: string
  // rating: number
  // saved: boolean
  images: Array<{
    src: string
    alt: string
  }>
}) {
  const [image] = images
  return (
    <Card>
      <Image
        alt={image.alt}
        src={`https://source.unsplash.com/${image.src}`}
        width={640}
        height={480}
        style={{
          maxWidth: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cookingTime}
        </Typography>
      </CardContent>
    </Card>
  )
}
