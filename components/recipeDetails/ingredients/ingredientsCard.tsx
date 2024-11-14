import Ingredient from "./ingridient";

export default function IngredientsCard({
  ingredients,
}: {
  ingredients: Array<{ id: string | number; [key: string]: any }>;
}) {
  return (
    <div className="flex flex-col gap-2 p-4 w-full border-t-2 border-lightOlive">
      <h3 className="font-bold">Składniki:</h3>
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          ingridient={{
            id: ingredient.id.toString(),
            quantity: ingredient.quantity || "",
            name: ingredient.name || "",
          }}
        />
      ))}
    </div>
  );
}
