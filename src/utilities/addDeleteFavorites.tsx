import { VACANCY_IDS } from "../constans/constans";

function addDeleteFavorites(id: number) {

  const vacancyIds = localStorage.getItem(VACANCY_IDS);
  let newVacancyIds = [];

  if (!vacancyIds) {

    newVacancyIds.push(id);
    localStorage.setItem(VACANCY_IDS, JSON.stringify(newVacancyIds));
  } else {

    newVacancyIds = JSON.parse(vacancyIds);
    const indexId = newVacancyIds.findIndex((item: number) => {
      return item === id;
    });

    if (indexId < 0) {

      newVacancyIds.push(id);
      localStorage.setItem(VACANCY_IDS, JSON.stringify(newVacancyIds));
    } else {

      newVacancyIds.splice(indexId, 1);
      localStorage.setItem(VACANCY_IDS, JSON.stringify(newVacancyIds));
    }

  }
}


export { addDeleteFavorites };