// import { createClient } from "@/utils/supabase/server";

// export default async function Search() {
//   const supabase = await createClient();
//   // const { data: recipes } = await supabase
//   //   .from("v_all_recipes")
//   //   .select()
//   //   .range(0, 10);

//   const handleSearch = async (inputValue: string) => {
//     const { data: recipes } = await supabase.from("v_all_recipes").select();

//     console.log(recipes);
//     //
//   };
//   return (
//     <div className="flex justify-center items-center w-full">
//       <input
//         type="text"
//         placeholder="Szukaj..."
//         className="w-full max-w-xl p-2 border-2 border-gray rounded-md mb-4"
//         onChange={(e) => handleSearch(e.target.value)}
//       />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { searchRecipes } from "@/lib/actions";
import RecipeCard from "../recipeCard";
import SearchOutput from "./searchOutput";
import Link from "next/link";
import SeeAllRecipes from "../seeAllRecipes";

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

  // useEffect(() => {
  //   if (searchTerm.length > 2) {
  //     const fetchRecipes = async () => {
  //       const results = await searchRecipes(searchTerm);
  //       setRecipes(results);
  //     };
  //     fetchRecipes();
  //   }
  // }, [searchTerm]);

  console.log(recipes);

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
            className="font-bold text-lg absolute z-20 text-darkOlive top-2 right-2 "
          >
            X
          </span>
        )}
      </div>
      {/* <span
        onClick={() => setSearchTerm("")}
        className="font-bold text-lg m-4 absolute z-20 bg-white text-darkOlive w-10 h-10 rounded-full flex justify-center items-center"
      >
        X
      </span> */}
      {/* Display your results */}
      {searchTerm.length > 2 ? (
        <div className="absolute top-10 mt-4 z-50 bg-white overflow-y-scroll max-h-[460px] w-full shadow-xl rounded-xl  max-w-xl">
          <h4 className="m-4 font-bold uppercase color-olive text-base">
            {searchTerm}:
          </h4>
          <div className="w-full flex flex-col gap-4 items-center">
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
          {/* <SeeAllRecipes searchTerm={searchTerm} /> */}
          {/* <Link
            href="/"
            className="bg-lightOlive color-olive font-bold text-center p-4 rounded-xl w-[80%] relative left-1/2 translate-x-[-50%] block my-6 hover:bg-olive hover:text-white"
          >
            Zobacz wszystkei przepisy
          </Link> */}
        </div>
      ) : null}
    </div>
  );
}
