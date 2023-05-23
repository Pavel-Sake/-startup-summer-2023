import React from "react";
import { Pagination } from "@mantine/core";

import { useAppDispatch } from "../../hooks/redux";
import { getActivePage } from "../../utilities/getActivePage";
import { setPageNumberToStore } from "../../utilities/setPageNumberToStore";
import { PAGINATION_PLACE, VACANCY_NUMBER_ON_PAGE } from "../../constans/constans";

type WrapperPaginationProps = {
  place: PAGINATION_PLACE
  totalNumberItems: number
}

function WrapperPagination({ place, totalNumberItems }: WrapperPaginationProps) {
  const activePage = getActivePage(place);

  const dispatch = useAppDispatch();

  const totalNumberPages = Math.ceil(totalNumberItems / VACANCY_NUMBER_ON_PAGE);

  function handleChangePage(value: number) {
    setPageNumberToStore(place, value, dispatch);
  }
  
  return (
    <Pagination
      total={totalNumberPages}
      value={activePage}
      onChange={handleChangePage}
    />
  );
}

export { WrapperPagination };
