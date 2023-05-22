import { useState } from "react";
import { useGetCataloguesQuery } from "../services/startupSummerApi";
interface IStateForSelect {
  value: string,
  label: string,
}

function useCatalogues(): IStateForSelect[] {

  const [cataloguesForSelect, setCataloguesForSelect] = useState<IStateForSelect[]>([]);

  const { data } = useGetCataloguesQuery("", {
    skip: cataloguesForSelect.length > 0
  });

  if (data) {
    const newCataloguesForSelect: IStateForSelect[] = [];

    data.forEach((item) => {
      const obj = {
        value: `${item.key}`,
        label: item.title_rus,
      };
      newCataloguesForSelect.push(obj);
    });
    setCataloguesForSelect(newCataloguesForSelect);
  }

  return cataloguesForSelect;
}


export { useCatalogues };