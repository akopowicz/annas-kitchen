import Image from "next/image";
import StarsCard from "./starsCard";
import Link from "next/link";
import HeartCard from "./heartCard";
import ExtraDetailsCard from "./extraDetailsCard";

export default function RecipeCard({
  recipe,
}: {
  recipe: Recipe & {
    preparation_time: number;
    difficulty: string;
    main_ingredients: string;
  };
}) {
  return (
    <div className="relative flex flex-col w-[85vw] bg-[#ffffff] m-4 rounded-xl shadow-lg overflow-hidden max-w-[350px] min-w-[350px] hover:shadow-2xl  transition-all duration-300 md:w-2/6">
      <HeartCard recipeId={recipe.id} />
      <Link href={`/recipes/${recipe.link}`} className="flex flex-col w-full">
        <div className="relative">
          <Image src={recipe.image} alt="food" width={500} height={500} />
        </div>
        <div className="px-4 py-4 pb-6">
          <h3 className="text-olive font-secondaryFont font-bold text-base uppercase">
            {recipe.dish_type}
          </h3>
          <div className="flex gap-2 items-center justify-between">
            <h3 className=" font-bold text-base">{recipe.title}</h3>
            <StarsCard stars={recipe.stars} size={16} />
          </div>
          <ExtraDetailsCard recipe={recipe} />
        </div>
      </Link>
    </div>
  );
}

interface Recipe {
  id: string | number;
  link: string;
  image: string;
  dish_type: string;
  title: string;
  stars: number;
}
