import React, { useState } from "react";
import { Pagination } from "@mantine/core";
import { useAppDispatch } from "../../hooks/redux";
import { getActivePage } from "../../utilities/getActivePage";
import { setPageNumberBasedOnPlace } from "../../utilities/setPageNumberBasedOnPlace";

type MyProps = {
  place: string
}

function PaginationComponent({ place }: MyProps) {
  
  const activePage = getActivePage(place);
  const [total, setTotal] = useState(3);

  const dispatch = useAppDispatch();

  function handleChangePage(value: number) {

    if (value === 1) {
      setTotal(value + 2);
    } else {
      setTotal(value + 1);
    }
    
    setPageNumberBasedOnPlace(place, value, dispatch);
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