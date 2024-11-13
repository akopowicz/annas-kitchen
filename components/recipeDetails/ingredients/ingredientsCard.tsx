import Ingredient from "./ingridient";

export default function IngredientsCard({ ingredients }: { ingredients: Array<{ id: string | number, [key: string]: any }> }) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <h3 className="font-bold">Składniki:</h3>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingridient={ingredient} />
      ))}
    </div>
  );
}
