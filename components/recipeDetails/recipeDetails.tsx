import RecipeCardDetails from "../recipeCardDetails";

interface Recipe {
  preparation_time: number;
  difficulty: string;
  is_multicooker: boolean;
  multicooker_program?: string;
  multicooker_time?: number;
  multicooker_temperature?: number;
}

interface Ingredient {
  is_main: boolean;
}

export default function RecipeDetails({
  recipe,
  ingredients,
}: {
  recipe: Recipe;
  ingredients: Ingredient[];
}) {
  let main_ingredients = 0;
  const preparation_time =
    recipe.preparation_time < 60
      ? `${recipe.preparation_time} min`
      : `${recipe.preparation_time / 60} h`;

  ingredients.forEach((ingredient) => {
    if (ingredient.is_main) {
      main_ingredients += 1;
    }
  });

  return (
    <div className="flex justify-between gap-2 p-6 lg:w-1/2">
      <div className="flex flex-col gap-2">
        <RecipeCardDetails
          title="Łatwość:"
          inscription={recipe.difficulty}
          justify="justify-start"
          item="items-start"
        />

        <RecipeCardDetails
          title="Czas:"
          inscription={preparation_time}
          justify="justify-start"
          item="items-start"
        />

        <RecipeCardDetails
          title="Główne składniki:"
          inscription={main_ingredients.toString()}
          justify="justify-start"
          item="items-start"
        />
      </div>
      {recipe.is_multicooker && (
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-olive">Multicooker:</h3>

          <RecipeCardDetails
            title="Tryb:"
            inscription={recipe.multicooker_program || ""}
            justify="justify-start"
            item="items-start"
          />

          <RecipeCardDetails
            title="Czas:"
            inscription={
              recipe.multicooker_time ? `${recipe.multicooker_time} min` : ""
            }
            justify="justify-start"
            item="items-start"
          />

          <RecipeCardDetails
            title="Temperatura:"
            inscription={
              recipe.multicooker_temperature
                ? `${recipe.multicooker_temperature}°C`
                : ""
            }
            justify="justify-start"
            item="items-start"
          />
        </div>
      )}
    </div>
  );
}
