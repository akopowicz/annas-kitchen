// "use client";
import { useState } from "react";
import Image from "next/image";
import Star from "./star";

export default function StarsCard({
  stars,
  size = 16,
}: {
  stars: number;
  size: number;
}) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          // onRate={() => {
          //   handleRating(i + 1);
          // }}
          // full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
          full={stars ? stars >= i + 1 : stars >= i + 1}
          // onHoverIn={() => {
          //   setTempRating(i + 1);
          // }}
          // onHoverOut={() => setTempRating(0)}
          color="#EABA4A"
          size={size}
        />
      ))}
    </div>
  );
}
