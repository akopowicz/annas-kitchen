import RecipeCard from "@/components/recipeCard";
import SeeAllRecipes from "@/components/seeAllRecipes";
import Link from "next/link";

export default function RecipesCards({ recipes }: { recipes: any[] }) {
  console.log(recipes);
  return (
    <div className="flex flex-col gap-4 justify-center items-center relative max-w-[1200px] lg:flex-row flex-wrap">
      <div className="w-full flex flex-col gap-4 justify-center items-center relative lg:flex-row flex-wrap">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <Link
        href="/recipes?page=1"
        className="bg-lightOlive color-olive font-bold text-center p-4 rounded-xl w-[80%] relative block my-6 hover:bg-olive hover:text-white max-w-[350px] transition-all duration-300"
      >
        Zobacz wszystke przepisy
      </Link>
      {/* <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard /> */}
    </div>
  );
}
