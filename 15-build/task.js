export class Task {
    constructor(taskName) {
        this.taskName = taskName;
    }

    run(){
       console.log(`Имя задачи ${this.taskName}`);
    }
}