import Link from "next/link";
import { FC } from "react";

type PaginationProps = {
  totalCount: number;
  currentPage: number;
  siblingCount: number;
  pageSize: number;
  className?: string;
  mapHref: (page: number) => string;
};

const Pagination: FC<PaginationProps> = ({
  className = "",
  totalCount,
  currentPage,
  pageSize,
  mapHref,
}) => {
  // const [currentPage, setCurrentPage] = useState<number>(defaultPage);
  const maxPage = Math.ceil(totalCount / pageSize);

  return (
    <div
      className={`
        flex
        items-center
        justify-center
        gap-x-4
        ${className}
        overflow-x-auto
        py-2
      `}
    >
      {Array.from(Array(maxPage).keys()).map((page) => {
        // console.log(currentPage === Number(page + 1));
        return (
          <Link
            key={page}
            scroll={false}
            href={mapHref(page)}
            className={`
              py-2.5
              px-4
              border-[1px]
              ${
                currentPage === Number(page + 1)
                  ? `
                    bg-black
                    text-white
                  `
                  : ``
              }
            `}
          >
            {page + 1}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
