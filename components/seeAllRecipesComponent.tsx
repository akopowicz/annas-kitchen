"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { allRecipes } from "@/lib/actions";
import Pagination from "./pagination";
import RecipeCard from "./recipeCard";
import LoadingRecipe from "@/components/loading/loadingRecipe";
import FilterSortComponent from "./filterSortComponent";

export default function SeeAllRecipesComponent() {
  const searchParams = useSearchParams();
  const [recipes, setRecipes] = useState<any[]>([]);
  const [pagesNumber, setPagesNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("");

  const search = searchParams.get("search") ?? undefined;
  const page = searchParams.get("page");

  useEffect(() => {
    async function fetchRecipes() {
      try {
        setLoading(true);
        const data = await allRecipes(
          page ? parseInt(page) - 1 : 0,
          search,
          sortBy
        );
        if (Array.isArray(data[0])) {
          setRecipes(data[0]);
        } else {
          setRecipes([]);
        }

        if (typeof data[1] === "number") {
          setPagesNumber(Math.ceil(data[1] / 10));
        } else {
          setPagesNumber(1);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, [page, search, sortBy]);

  if (loading) return <LoadingRecipe />;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col gap-4 justify-center items-center relative">
      <FilterSortComponent onSortChange={setSortBy} selectedSort={sortBy} />
      {recipes && recipes.length > 0 ? (
        <ul className="w-full flex flex-col gap-4 justify-center items-center relative max-w-[1200px] md:flex-row flex-wrap">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </ul>
      ) : (
        <p>No recipes found.</p>
      )}
      <Pagination
        currentPage={page ? parseInt(page) : 1}
        totalPages={pagesNumber}
      />
    </div>
  );
}