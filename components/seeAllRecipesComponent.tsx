"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { allRecipes } from "@/lib/actions";
import Pagination from "./pagination";
import RecipeCard from "./recipeCard";

export default function SeeAllRecipesComponent() {
  //   const searchParams = useSearchParams();

  //   const search = searchParams.get("wyszukiwanie") ?? undefined;
  //   const page = searchParams.get("page");

  //   // console.log(params);
  //   console.log(searchParams);
  //   console.log(search);

  //   const findRecipes = allRecipes(page ? parseInt(page) : 1, search);

  //   console.log(findRecipes);

  const searchParams = useSearchParams();
  const [recipes, setRecipes] = useState(null);
  const [pagesNumber, setPagesNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const search = searchParams.get("search") ?? undefined;
  const page = searchParams.get("page");

  useEffect(() => {
    async function fetchRecipes() {
      try {
        setLoading(true);
        const data = await allRecipes(page ? parseInt(page) - 1 : 1, search);
        setRecipes(data[0]);

        setPagesNumber(Math.ceil(data[1] / 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, [page, search]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(recipes);
  //   const findRecipes = allRecipes(search, page);

  return (
    <div className="flex flex-col gap-4 justify-center items-center relative">
      {/* <h1>Recipes</h1> */}
      {recipes && recipes.length > 0 ? (
        <ul className="flex flex-col gap-4 justify-center items-center relative max-w-[1200px] xl:flex-row flex-wrap">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
            // <li key={recipe.id}>{recipe.title}</li>
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
