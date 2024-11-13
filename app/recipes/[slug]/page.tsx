import RecipeDetailsCard from "@/components/recipeDetails/recipeDetailsCard";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { createClient } from "@/utils/supabase/server";

export default async function RecipePage({ params }) {
  const supabase = await createClient();
  const { slug } = await params;
  const { data: recipes } = await supabase
    .from("recipes")
    .select()
    .eq("link", slug);
  console.log(recipes);

  const { data: ingredients } = await supabase
    .from("ingredients")
    .select()
    .eq("recipes_id", recipes[0].id);

  console.log(ingredients);

  return <RecipeDetailsCard recipe={recipes[0]} ingredients={ingredients} />;
}
