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
    increase(sum){
        this.balance +=sum;
        this.operations ++;
    }
};