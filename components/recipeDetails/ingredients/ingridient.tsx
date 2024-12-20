export default function Ingredient({
  ingridient,
}: {
  ingridient: { id: string; quantity: string; name: string };
}) {
  return (
    <div className="text-base flex items-center">
      <input
        type="checkbox"
        id={ingridient.id}
        className="appearance-none w-4 h-4 border-2 border-olive rounded-sm bg-white
   shrink-0
    checked:bg-olive checked:border-0 mr-2"
      />
      <label htmlFor={ingridient.id}>
        <span className="font-bold mr-4 ">{ingridient.quantity}</span>
        <span>{ingridient.name}</span>
      </label>
    </div>
  );
}
