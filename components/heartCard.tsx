"use client";
import { useEffect, useState } from "react";

export default function HeartCard({ recipeId }: { recipeId: string | number }) {
  const [isFilled, setIsFilled] = useState(false);
  const recipeIdString = recipeId.toString();

  const getLikedRecipes = () => {
    const liked = localStorage.getItem("likedRecipes");
    return liked ? JSON.parse(liked) : [];
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const likedRecipes = getLikedRecipes();
      setIsFilled(likedRecipes.includes(recipeIdString));
    }
  }, [recipeIdString]);

  const handleClick = () => {
    const likedRecipes = getLikedRecipes();
    if (likedRecipes.includes(recipeIdString)) {
      const updatedLikes = likedRecipes.filter(
        (id: string) => id !== recipeIdString
      );
      localStorage.setItem("likedRecipes", JSON.stringify(updatedLikes));
      setIsFilled(false);
    } else {
      likedRecipes.push(recipeIdString);
      localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));
      setIsFilled(true);
    }
  };

  return (
    <div
      className="bg-white absolute top-0 right-0 m-2 shadow-xl p-1 rounded-[50%] z-10"
      onClick={handleClick}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#4F622E"
      >
        <path
          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
          fill={isFilled ? "#4F622E" : "none"}
        />
      </svg>
    </div>
  );
}
