

function getRequestParamsFavorite(stringForRequest: string, pageNumber: number) {

  const params = {
    stringForRequest: stringForRequest,
    page: pageNumber,
    count: 4
  };

  return params;
}

export { getRequestParamsFavorite };