import { allRecipes } from "@/lib/actions";

import MyFavourite from "@/components/myFavourite";
export default async function FavouriteCard() {
  return (
    <div>
      <MyFavourite />
    </div>
  );
}
