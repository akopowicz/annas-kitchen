"use client";
import { useState } from "react";

type FilterSortProps = {
  onSortChange: (sortBy: string) => void;
  selectedSort: string;
};

export default function FilterSortComponent({
  onSortChange,
  selectedSort,
}: FilterSortProps) {
  const [sortBy, setSortBy] = useState("");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = event.target.value;
    onSortChange(selectedSort);
  };

  return (
    <div className="flex gap-4 lg:self-end mr-2">
      <select
        value={selectedSort}
        onChange={handleSortChange}
        className="p-2 border rounded-md"
      >
        <option value="">Sortuj po</option>
        <option value="most_liked">Najbardziej polecane</option>
        <option value="quickest">Najszybsze do przygotowania</option>
        <option value="fewest_ingredients">Najmniej składników</option>
        <option value="latest">Najnowsze</option>
      </select>
    </div>
  );
}
