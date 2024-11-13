export default function RecipeCardDetails({
  title,
  inscription,
  justify,
  item,
}) {
  return (
    <div
      className={`flex flex-col ${justify} ${item}`}
      // className={`${border ? "border-r-[1.5px] border-lightOlive" : ""} flex flex-col ${border ? "pr-2" : ""}`}
    >
      <h4 className="text-sm text-grey">{title}</h4>
      <p className="text-sm text-grey font-semibold">{inscription}</p>
    </div>
  );
}
