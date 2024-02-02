import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

function MyPagination({
  hasPrev,
  hasNext,
  page,
  cat,
}: {
  hasPrev: boolean;
  hasNext: boolean;
  page: number;
  cat: string;
}) {

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {hasPrev ? (
            <PaginationPrevious href={`?page=${page - 1}&cat=${cat}`} />
          ) : (
            <Button
              variant={"ghost"}
              className="gap-1 pr-2.5 cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </Button>
          )}
        </PaginationItem>
        {Array.from({ length: 2 }, (_, i) => i + 1).map((item) => (
          <PaginationItem key={item}>
            <PaginationLink
              href={`?page=${page + item - 1}&cat=${cat}`}
              isActive={page == page + item - 1}
            >
              {page + item - 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem className="hidden sm:flex">
          <PaginationLink href={`?page=${page + 2}&cat=${cat}`}>
            {page + 2}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          {hasNext ? (
            <PaginationNext
              aria-disabled={hasNext}
              href={`?page=${page + 1}&cat=${cat}`}
            />
          ) : (
            <Button
              variant={"ghost"}
              className="gap-1 pr-2.5 cursor-not-allowed"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default MyPagination;
