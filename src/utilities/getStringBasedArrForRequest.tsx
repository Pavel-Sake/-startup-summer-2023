
type favoritesIdType = number[] | []

function getStringBasedArrForRequest(favoritesId: favoritesIdType) {

  let res = "";

  favoritesId.forEach((item) => {
    res += `&ids[]=${item}`;
  });

  return res;
}

export { getStringBasedArrForRequest };