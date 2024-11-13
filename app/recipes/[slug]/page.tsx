import RecipeDetailsCard from "@/components/recipeDetails/recipeDetailsCard";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { createClient } from "@/utils/supabase/server";

export default async function RecipePage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = await createClient();
  const { slug } = params;
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
