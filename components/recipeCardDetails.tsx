export default function RecipeCardDetails({
  title,
  inscription,
  justify,
  item,
}: {
  title: string;
  inscription: string;
  justify: string;
  item: string;
}) {
  return (
    <div className={`flex flex-col ${justify} ${item}`}>
      <h4 className="text-sm text-grey">{title}</h4>
      <p className="text-sm text-grey font-semibold">{inscription}</p>
    </div>
  );
}
