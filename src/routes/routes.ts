interface Ipath {
  path: string;
  value: string;
  index: number;
}
const routs: Ipath[] = [
  { path: "/", value: "Поиск Вакансий", index: 1 },
  { path: "/favorites", value: "Избраное", index: 2 },
];

export { routs };
