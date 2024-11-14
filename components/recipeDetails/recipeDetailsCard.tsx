import RecipesHeader from "./recipesHeader";
import IngredientsCard from "./ingredients/ingredientsCard";
import Description from "./description";
import RecipeDetails from "./recipeDetails";

export default function RecipeDetailsCard({
  recipe,
  ingredients,
}: {
  recipe: any;
  ingredients: any;
}) {
  console.log(ingredients);
  return (
    <div className="w-full flex flex-col gap-4 lg:flex lg:justify-center lg:items-center lg:bg-silver">
      <RecipesHeader recipe={recipe} />
      <div className="w-full flex flex-col gap-4 lg:w-1/2 max-w-[800px] lg:gap-8 lg:bg-[#ffffff] lg:rounded-xl lg:shadow-lg lg:shadow-black/20 lg:p-8 lg:gap-8 lg:mb-8">
        <RecipeDetails recipe={recipe} ingredients={ingredients} />
        <IngredientsCard ingredients={ingredients} />
        <Description description={recipe.description} />
      </div>
    </div>
  );
}
