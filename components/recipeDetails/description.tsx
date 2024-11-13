export default function Description({ description }: { description: string }) {
  const formatedDescription = description.split("/n");
  console.log(formatedDescription);
  return (
    <div className="flex flex-col gap-2 p-4">
      <h3 className="font-bold">Opis:</h3>
      {formatedDescription.map((step: string, index: number) => (
        <div key={`step-${index}`}>
          <h3 className="font-bold">
            Krok {index + 1}
          </h3>
          <p>{step}</p>
        </div>
      ))}
      {/* <p>{description}</p> */}
    </div>
  );
}
