"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Pagination({
  currentPage,
  totalPages,
  //   onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  // onPageChange: (page: number) => void;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const onPageChange = (page: number) => {
    console.log("click");
    const params = new URLSearchParams(searchParams);
    console.log(params);
    params.set("page", page.toString());

    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div>
      <ul className="flex justify-center">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="m-2">
            <button
              onClick={() => onPageChange(pageNumber)}
              disabled={pageNumber === currentPage}
              className={`${
                pageNumber === currentPage
                  ? "bg-lightOlive text-olive "
                  : "text-olive"
              } px-4 py-2 rounded-full`}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
