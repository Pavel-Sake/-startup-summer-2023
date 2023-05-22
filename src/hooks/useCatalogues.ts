import { useState } from "react";

import { useGetCataloguesQuery } from "../services/startupSummerApi";
interface IStateForSelect {
  value: string,
  label: string,
}

export function useCatalogues(): IStateForSelect[] {
  const [catalogues, setCatalogues] = useState<IStateForSelect[]>([]);

  const { data } = useGetCataloguesQuery("", {
    skip: catalogues.length > 0
  });

  if (data) {
    const newCatalogues: IStateForSelect[] = [];

    data.forEach((item) => {
      const obj = {
        value: `${item.key}`,
        label: item.title_rus,
      };

      newCatalogues.push(obj);
    });

    setCatalogues(newCatalogues);
  }

  return catalogues;
}
