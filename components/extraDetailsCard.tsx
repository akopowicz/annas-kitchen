import RecipeCardDetails from "@/components/recipeCardDetails";
import Border from "@/components/border";

export default function ExtraDetailsCard({
  recipe,
}: {
  recipe: {
    preparation_time: number;
    difficulty: string;
    main_ingredients: string;
  };
}) {
  const inscriptionTime =
    recipe.preparation_time < 60
      ? `${recipe.preparation_time} min`
      : `${recipe.preparation_time / 60} h`;

  return (
    <div className="flex gap-2 items-top justify-between relative mt-6">
      <RecipeCardDetails
        title="Łatwość:"
        inscription={recipe.difficulty}
        justify="justify-center"
        item="items-center"
      />
      <Border />
      <RecipeCardDetails
        title="Czas:"
        inscription={inscriptionTime}
        justify="justify-center"
        item="items-center"
      />
      <Border />
      <RecipeCardDetails
        title="Główne składniki:"
        inscription={recipe.main_ingredients}
        justify="justify-center"
        item="items-center"
      />
    </div>
  );
}
