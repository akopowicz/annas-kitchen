import Link from "next/link";
// import { useSearchParams } from "next/navigation";
export default function seeAllRecipes({ searchTerm, params }: { searchTerm: string; params: any }) {
  return (
    <Link
      href={`/recipes?wyszukiwanie=${searchTerm}&page=1`}
      className="bg-lightOlive color-olive font-bold text-center p-4 rounded-xl w-[80%] relative left-1/2 translate-x-[-50%] block my-6 hover:bg-olive hover:text-white transition-all duration-300"
    >
      Zobacz wszystkei przepisy
    </Link>
  );
}
