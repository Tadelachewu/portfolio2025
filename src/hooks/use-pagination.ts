'use client';

import { useEffect, useRef, useState } from 'react';

type UsePaginationOptions = {
  pageSize: number;
  // Which page to show when an item is added: new projects are appended, new posts are prepended.
  jumpOnAdd?: 'first' | 'last';
};

export function usePagination<T>(items: T[], { pageSize, jumpOnAdd }: UsePaginationOptions) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const prevLength = useRef(items.length);

  useEffect(() => {
    if (jumpOnAdd && items.length > prevLength.current) {
      setPage(jumpOnAdd === 'first' ? 1 : totalPages);
    } else if (page > totalPages) {
      // Deleting the last item on the last page would otherwise leave an empty page.
      setPage(totalPages);
    }
    prevLength.current = items.length;
  }, [items.length, totalPages, jumpOnAdd, page]);

  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;

  return {
    page: currentPage,
    totalPages,
    setPage,
    pageItems: items.slice(start, start + pageSize),
    start,
    end: Math.min(start + pageSize, items.length),
    total: items.length,
  };
}
