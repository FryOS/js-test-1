function getQuery(query, callback) {
  return `search=${query?.search}&take=${query?.take}`;
}

const query = {
  search: "Вася",
  take: 10,
};

const queryString = getQuery(query);
console.log(queryString);
