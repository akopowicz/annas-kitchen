import RecipeDetailsCard from "@/components/recipeDetails/recipeDetailsCard";
import { createClient } from "@/utils/supabase/server";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const supabase = await createClient();
  const slug = (await params).slug;
  const { data: recipes } = await supabase
    .from("recipes")
    .select()
    .eq("link", slug);
  console.log(recipes);

  if (!recipes || recipes.length === 0) {
    return <div>Recipe not found</div>;
  }

  const { data: ingredients } = await supabase
    .from("ingredients")
    .select()
    .eq("recipes_id", recipes[0].id);

  console.log(ingredients);

  return <RecipeDetailsCard recipe={recipes[0]} ingredients={ingredients} />;
}
