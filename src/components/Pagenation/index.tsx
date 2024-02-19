"use client";
import { usePathname, useRouter } from "next/navigation";

interface IPaginationProps {
  currentPage: number;
  totalPages?: number;
}

const Pagination = ({ currentPage, totalPages = 0 }: IPaginationProps) => {
  const pathname = usePathname();
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const router = useRouter();

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => router.push(`${pathname}?page=${currentPage - 1}`)}
        disabled={isFirstPage}
        className={`${
          isFirstPage ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        } px-3 py-1 bg-gray-200 rounded-md`}
      >
        Prev
      </button>
      <span className="px-3 py-1 bg-gray-200 rounded-md">{currentPage}</span>
      <button
        onClick={() => router.push(`${pathname}?page=${currentPage + 1}`)}
        disabled={isLastPage}
        className={`${
          isLastPage ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        } px-3 py-1 bg-gray-200 rounded-md`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
