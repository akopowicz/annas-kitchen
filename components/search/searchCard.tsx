"use client";

import { useState } from "react";
import { searchRecipes } from "@/lib/actions";
import RecipeCard from "../recipeCard";
import Link from "next/link";

export default function SearchCard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (value: string) => {
    setSearchTerm(value);
    if (value.length > 2) {
      const results = await searchRecipes(value);
      setRecipes(results as never[]);
    } else {
      setRecipes([]);
    }
  };

  return (
    <div className="relative flex justify-center items-center w-full flex-col gap-4">
      <div className="relative w-[90%] max-w-xl">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Wyszukaj przepis..."
          className="w-full p-2 border-2 border-gray rounded-md mb-4"
        />
        {searchTerm.length > 2 && (
          <span
            onClick={() => setSearchTerm("")}
            className="font-bold text-lg absolute z-20 text-darkOlive top-2 right-2 cursor-pointer"
          >
            X
          </span>
        )}
      </div>
      {searchTerm.length > 2 ? (
        <div className="absolute top-10 mt-4 z-50 bg-white overflow-y-scroll max-h-[460px] w-full shadow-xl rounded-xl  max-w-xl">
          <h4 className="m-4 font-bold uppercase color-olive text-base">
            {searchTerm}:
          </h4>
          <div
            className="w-full flex flex-col gap-4 items-center"
            onClick={() => setSearchTerm("")}
          >
            {recipes &&
              recipes.length > 0 &&
              recipes.map((recipe: any) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
          </div>

          <Link
            href={`/recipes?search=${searchTerm}&page=1`}
            className="bg-lightOlive color-olive font-bold text-center p-4 rounded-xl w-[80%] relative left-1/2 translate-x-[-50%] block my-6 hover:bg-olive hover:text-white max-w-[400px]"
            onClick={() => setSearchTerm("")}
          >
            Zobacz wszystke przepisy
          </Link>
        </div>
      ) : null}
    </div>
  );
}
