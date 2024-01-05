import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import recipes from "@repo/data-recipes"
import RecipePreviewCard from "../components/recipe-preview-card"

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={{ xs: 4, md: 8 }}
      >
        {recipes.map((recipe) => (
          <RecipePreviewCard key={recipe.id} {...recipe} />
        ))}
      </Stack>
    </Container>
  )
}
