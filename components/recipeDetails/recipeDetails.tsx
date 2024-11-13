import RecipeCardDetails from "../recipeCardDetails";
import Border from "../border";
import MulticookerDetails from "./multicookerDetails";
import StarsCard from "../starsCard";

export default function RecipeDetails({ recipe, ingredients }) {
  console.log(ingredients);
  let main_ingredients = 0;
  const preparation_time =
    recipe.preparation_time < 60
      ? `${recipe.preparation_time} min`
      : `${recipe.preparation_time / 60} h`;

  ingredients.forEach((ingredient) => {
    console.log(ingredient.is_main);
    if (ingredient.is_main) {
      main_ingredients += 1;
    }
  });

  console.log(main_ingredients);
  return (
    <div className="flex justify-between gap-2 p-6 border-b-2 border-lightOlive">
      <div className="flex flex-col gap-2">
        <RecipeCardDetails
          title="Łatwość:"
          inscription={recipe.difficulty}
          justify="justify-start"
          item="items-start"
        />

        <RecipeCardDetails
          title="Czas:"
          // inscription={recipe.preparation_time}
          inscription={preparation_time}
          justify="justify-start"
          item="items-start"
        />

        <RecipeCardDetails
          title="Główne składniki:"
          inscription={main_ingredients}
          justify="justify-start"
          item="items-start"
        />
      </div>
      {recipe.is_multicooker && (
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-olive">Multicooker:</h3>

          <RecipeCardDetails
            title="Tryb:"
            inscription={recipe.multicooker_program}
            justify="justify-start"
            item="items-start"
          />

          <RecipeCardDetails
            title="Czas:"
            inscription={`${recipe.multicooker_time} min`}
            justify="justify-start"
            item="items-start"
          />

          <RecipeCardDetails
            title="Temperatura:"
            inscription={`${recipe.multicooker_temperature}°C`}
            justify="justify-start"
            item="items-start"
          />
        </div>
      )}
    </div>
  );
}
