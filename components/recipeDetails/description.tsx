export default function Description({ description }: { description: string }) {
  const formatedDescription = description.split("/n");
  return (
    <div className="flex flex-col gap-2 p-4">
      <h3 className="font-bold">Opis:</h3>
      {formatedDescription.map((step: string, index: number) => (
        <div key={`step-${index}`} className="my-4">
          <h3 className="font-bold mb-1">Krok {index + 1}</h3>
          <p>{step}</p>
        </div>
      ))}
    </div>
  );
}
