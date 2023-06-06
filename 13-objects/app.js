// const user123 = [
//   { name: "John", age: 30 },
//   { name: "John1", age: 41 },
//   { name: "John2", age: 12 },
//   { name: "John4", age: 340 },
// ];
// console.log(user.sort((a, b) => a.age - b.age));

const users = [
  {
    name: "Вася",
    surname: "Пупкин",
    age: 30,
    skills: ["Разработка", "Dev0ps"],
  },
  {
    name: "Катя",
    surname: "Белова",
    age: 18,
    skills: ["Дизайн"],
  },
];

const usersMap = users.map((user) => {
  return {
    fullname: `${user.name} ${user.surname}`,
    skillNum: user.skills.length,
  };
});

const newUser = users.map((user) => {
  return {
    fullName: `${user.name} ${user.surname}`,
    skillNum: user.skills.length,
  };
});

console.log(usersMap);

const wallet = {
  balance: 0,
  operations: [],
  increase: function (num, reason) {
    this.balance += num;
    return true;
  },
  decrease: function (num, reason) {
    if(this.balance < sum){
        return false;
    }
    this.balance -= num;
    return true;
  },
  getOperationLength: function () {
    return this.operations.length;
  },
};
