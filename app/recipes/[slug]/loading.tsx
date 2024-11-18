export default function Loading() {
  return (
    <div className="flex flex-col gap-4 p-4 relative items-center">
      <div className="w-full h-[40vh] bg-neutral-300"></div>
      <div className="w-full flex flex-col gap-4 p-4 relative max-w-[800px] shadow-lg shadow-black/20 rounded-xl">
        <div>
          <div className="w-28 h-3 bg-neutral-300"></div>
          <div className="w-28 h-3 bg-neutral-300 mt-2"></div>
        </div>

        <div>
          <div className="w-28 h-3 bg-neutral-300"></div>
          <div className="w-28 h-3 bg-neutral-300 mt-2"></div>
        </div>
        <div>
          <div className="w-28 h-3 bg-neutral-300"></div>
          <div className="w-28 h-3 bg-neutral-300 mt-2"></div>
        </div>
        <div className="w-full h-1 bg-neutral-300 mt-10"></div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-28 h-5 bg-neutral-300"></div>
          <div className="w-28 h-5 bg-neutral-300"></div>
          <div className="w-28 h-5 bg-neutral-300"></div>
          <div className="w-28 h-5 bg-neutral-300"></div>
          <div className="w-28 h-5 bg-neutral-300"></div>
          <div className="w-28 h-5 bg-neutral-300"></div>
          <div className="w-28 h-5 bg-neutral-300"></div>
          <div className="w-28 h-5 bg-neutral-300"></div>
          <div className="w-28 h-5 bg-neutral-300"></div>
        </div>
      </div>
    </div>
  );
}
