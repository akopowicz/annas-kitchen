import Image from "next/image";
import HeartCard from "../heartCard";
import StarsCard from "../starsCard";

export default function RecipesHeader({ recipe }: { recipe: RecipeType }) {
  return (
    <header className="w-full relative h-[500px] max-h-[40vh] lg:max-h-[50vh] overflow-hidden ">
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={500}
        height={500}
        priority
        className="w-full h-full absolute object-cover object-center blur-lg"
      />
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={500}
        height={500}
        priority
        className="absolute w-full h-full absolute object-cover object-center lg:w-1/2 lg:left-1/2 lg:-translate-x-1/2"
      />
      <div className="w-full h-full bg-black opacity-50 absolute top-0" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center flex flex-col items-center gap-2">
        <h3 className="uppercase font-bold text-2xl lg:text-4xl">
          {recipe.dish_type}
        </h3>
        <h1 className="text-xl lg:text-2xl">{recipe.title}</h1>
        <StarsCard stars={recipe.stars} size={24} />
      </div>
      <div className="absolute w-full h-full lg:w-1/2 lg:left-1/2 lg:-translate-x-1/2">
        <HeartCard recipeId={recipe.id} />
      </div>
    </header>
  );
}

interface RecipeType {
  image: string;
  title: string;
  dish_type: string;
  stars: number;
  id: string | number;
}
