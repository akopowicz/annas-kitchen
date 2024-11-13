import { createClient } from "@/utils/supabase/server";
import RecipesCards from "@/components/recipesCards";

export default async function Index() {
  const supabase = await createClient();
  const { data: recipes } = await supabase
    .from("v_all_recipes")
    .select()
    .range(0, 5);

  const { data: count } = await supabase
    .from("v_all_recipes")
    .select("*", { count: "exact" });

  

  return (
    <div className="flex flex-col gap-4 justify-center items-center relative">
      <RecipesCards recipes={recipes} />
      {/* <RecipesPage /> */}
    </div>
  );
}
