"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import RecipeCard from "./recipeCard";
import { getFavourites } from "@/lib/actions";
import Pagination from "./pagination";
import LoadingRecipe from "./loading/loadingRecipe";
import FilterSortComponent from "./filterSortComponent";

export default function MyFavourites() {
  const searchParams = useSearchParams();
  const [savedItems, setSavedItems] = useState<number[]>([]);
  const [recipes, setRecipes] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const search = searchParams.get("search") ?? undefined;
  const page = Number(searchParams.get("page"));
  const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const liked = localStorage.getItem("likedRecipes");
      const likedRecipes = liked ? JSON.parse(liked) : [];
      setSavedItems(likedRecipes.map((id: string) => Number(id)));
    }
  }, []);

  useEffect(() => {
    async function fetchLikedRecipes() {
      try {
        setLoading(true);
        const [favourites, count] = await getFavourites(
          page - 1,
          savedItems,
          sortBy
        );
        setRecipes(favourites as any[]);
        setTotalCount(count as number);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLikedRecipes();
  }, [savedItems, page, sortBy]);

  if (loading) return <LoadingRecipe />;

  return (
    <div className="flex flex-col gap-4 justify-center items-center relative">
      <FilterSortComponent onSortChange={setSortBy} selectedSort={sortBy} />
      {recipes.length > 0 ? (
        <div className="w-full flex flex-col gap-4 max-w-[1200px]">
          <div className="w-full flex flex-col gap-4 justify-center items-center relative md:flex-row flex-wrap">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={Math.ceil(totalCount / 9)}
          />
        </div>
      ) : null}
    </div>
  );
}
