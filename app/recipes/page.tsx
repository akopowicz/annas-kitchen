import SeeAllRecipesComponent from "@/components/seeAllRecipesComponent";

export default async function Recipes() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center relative">
      <SeeAllRecipesComponent />
    </div>
  );
}
