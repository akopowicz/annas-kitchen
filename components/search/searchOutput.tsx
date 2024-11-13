// "use client";
// import { useState } from "react";
import Image from "next/image";
import Star from "@/components/star";
import StarsCard from "@/components/starsCard";
import RecipeCardDetails from "@/components/recipeCardDetails";
import Link from "next/link";
import Border from "@/components/border";
import HeartCard from "@/components/heartCard";
import ExtraDetailsCard from "@/components/extraDetailsCard";

// import Star from "./star";

export default function SearchOutput({ recipe }: { recipe: any }) {
  return (
    <div className="relative flex flex-col w-[85vw] bg-white m-4 rounded-xl shadow-lg overflow-hidden max-w-[400px]">
      <HeartCard recipeId={recipe.id} />
      <Link href={`/recipes/${recipe.link}`}>
        <div className="relative">
          <Image src="/food.jpg" alt="food" width={500} height={500} />
        </div>
        <div className="px-2 py-4">
          <h3 className="text-olive font-secondaryFont font-bold text-base uppercase">
            {recipe.dish_type}
          </h3>
          <div className="flex gap-2 items-center justify-between">
            <h3 className=" font-bold text-base">{recipe.title}</h3>
            {/* <div> */}
            <StarsCard stars={recipe.stars} size={16} />
            {/* </div> */}
          </div>

          <ExtraDetailsCard recipe={recipe} />
        </div>
      </Link>
    </div>
  );
}
