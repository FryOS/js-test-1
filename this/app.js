function removePass(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = "1";
  }
}

const user = {
  password: "password",
  login: "login",
};

removePass.call(user, true);

console.log(user);

const userInfo = {
  balance: "password",
  operations: "login",
  increase(sum) {
    this.balance += sum;
    this.operations++;
  },
};

("use strict");
const userInfo2 = {
  balance: 0,
  operations: 0,
  increase(sum) {
    this.balance += sum;
    this.operations++;
  },
};

function Ui() {
  const user = {
    balance: 0,
    operations: 0,
    increase(sum) {
      this.balance += sum;
      this.operations++;
    },
  };

  return function () {
    return user;
  };
}

const user3 = Ui();
const tt = user3().increase(3)
console.log(user3());

const user4 = Ui();
const tttt = user4().increase(100)
console.log(user4());
