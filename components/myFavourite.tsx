"use client";
import { useEffect, useState } from "react";

export default function MyFavourite() {
  const [isFilled, setIsFilled] = useState(false);
  const [savedItems, setSavedItems] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("coś ran");
      // Get all keys from localStorage
      const allKeys = Object.keys(localStorage);
      console.log(allKeys);
      // Get all values from localStorage
      const allValues = allKeys.map((key) => localStorage.getItem(key));
      console.log(allValues);
      // Filter out null values and set to state
      const validValues = allValues.filter((item) => item !== null) as string[];
      setSavedItems(validValues);
    }
  }, []);

  return (
    <div>
      
    </div>
  );
}
