function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((result) => {
          resolve(result); // Резолвим результат первого выполненного промиса
        })
        .catch((error) => {
          // Обработка ошибок
          console.error(error);
        });
    });
  });
}

// Пример использования
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 2000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 1000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 500)
);

race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // Выведет "Promise 3 resolved", promise3 выполнится первым
  })
  .catch((error) => {
    console.error(error);
  });
