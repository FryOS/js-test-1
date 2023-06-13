function getQuery(query) {
  return Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join("&");
}

const query = {
  search: "Вася",
  take: 10,
};

const queryString = getQuery(query);
console.log(queryString);
