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
          full={stars ? stars >= i + 1 : stars >= i + 1}
          color="#EABA4A"
          size={size}
        />
      ))}
    </div>
  );
}
