import RecipesHeader from "./recipesHeader";
import IngredientsCard from "./ingredients/ingredientsCard";
import Description from "./description";
import RecipeDetails from "./recipeDetails";

export default function RecipeDetailsCard({ recipe, ingredients }: { recipe: any; ingredients: any }) {
  console.log(ingredients);
  return (
    <div>
      <RecipesHeader recipe={recipe} />
      <RecipeDetails recipe={recipe} ingredients={ingredients} />
      <IngredientsCard ingredients={ingredients} />
      <Description description={recipe.description} />
    </div>
  );
}
