export default function LoadingRecipe() {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center relative md:flex-row">
      <ul className="w-full flex flex-col gap-4 justify-center items-center relative max-w-[1200px] md:flex-row flex-wrap">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="relative h-[400px] flex flex-col w-[85vw] bg-[#ffffff] m-4 rounded-xl shadow-lg overflow-hidden max-w-[350px] min-w-[350px] md:w-2/6"
          >
            <div className="bg-neutral-300 w-full h-1/2"></div>
            <div className="px-4 py-4 pb-6 w-full flex flex-col gap-4">
              <div className="w-1/2 h-5 bg-neutral-300"></div>
              <div className="w-full h-5 bg-neutral-300"></div>
              <div className="w-full flex gap-2">
                <div className="w-1/3 flex flex-col gap-2 items-center mt-5">
                  <div className="bg-neutral-300 w-3/4 h-3"></div>
                  <div className="bg-neutral-300 w-3/4 h-3"></div>
                </div>
                <div className="w-1/3 flex flex-col gap-2 items-center mt-5">
                  <div className="bg-neutral-300 w-3/4 h-3"></div>
                  <div className="bg-neutral-300 w-3/4 h-3"></div>
                </div>
                <div className="w-1/3 flex flex-col gap-2 items-center mt-5">
                  <div className="bg-neutral-300 w-3/4 h-3"></div>
                  <div className="bg-neutral-300 w-3/4 h-3"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
