import React, { useEffect, useState } from "react";
import { Pagination } from "@mantine/core";
import { useAppDispatch } from "../../hooks/redux";
import { pageNumberAction } from "../../store/reducers/numberPageSlice";
import { pageNumberFavoriteAction } from "../../store/reducers/numberPageFavoriteSlice";

type MyProps = {
  place: string
}

function PaginationComponent({ place }: MyProps) {
  const [activePage, setActivePage] = useState(1);
  const [total, setTotal] = useState(3);

  const dispatch = useAppDispatch();
  const { setPageNumber } = pageNumberAction;
  const { setPageNumberFavorite } = pageNumberFavoriteAction;

  function handleChangePage(value: number) {
    setActivePage(value);

    if (value === 1) {
      setTotal(value + 2);
    } else {
      setTotal(value + 1);
    }


    if (place === "main") {
      dispatch(setPageNumber({ pageNumber: value - 1 }));

    } else {
      dispatch(setPageNumberFavorite({ pageNumber: value - 1 }));
    }
  }
  
  return (
    <Pagination
      total={total}
      value={activePage}
      onChange={handleChangePage}
    />
  );
}

export { PaginationComponent };