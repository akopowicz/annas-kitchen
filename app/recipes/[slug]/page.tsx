import { createClient } from "@/utils/supabase/server";
import SeeAllRecipesComponent from "@/components/seeAllRecipesComponent";

export default async function Recipes() {
  // const searchParams = useSearchParams();

  // const search = searchParams.get("wyszukiwanie");
  // // console.log(params);
  // console.log(searchParams);
  // console.log(search);
  const supabase = await createClient();
  const { data: recipes } = await supabase.from("v_all_recipes").select();

  // return <pre>{JSON.stringify(recipes, null, 2)}</pre>;
  return (
    <div>
      <SeeAllRecipesComponent />
    </div>
  );
}
