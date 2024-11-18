import { allRecipes } from "@/lib/actions";

import MyFavourite from "@/components/myFavourite";
export default async function FavouriteCard() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center relative">
      <MyFavourite />
    </div>
  );
}
