const todoList = {
  tasks: [
    {
      title: "помыть посуду",
      id: 1,
      priority: 1,
    },
    {
      title: "постирать белье",
      id: 2,
      priority: 3,
    },
    {
      title: "сходить в магазин",
      id: 3,
      priority: 2,
    },
  ],
  addTodo: function (todo) {
    this.tasks.push(todo);
  },
  removeTodo: function (todoId) {
    this.tasks = this.tasks.filter((todo) => todo.id !== todoId);
  },
  updateTaskTitle(id, newTitle) {
    const taskToUpdate = this.tasks.find(task => task.id === id); 
    if (taskToUpdate) { 
      taskToUpdate.title = newTitle; 
    }
  },
  sortTasksByPriority: function () {
    return this.tasks.sort((a, b) =>  a.priority - b.priority);
  },
};

// todoList.addTodo({ title: "сходить в магазин", id: 4, priority: 5 });
// todoList.addTodo({ title: "сходить в магазин", id: 5, priority: 5 });
// todoList.removeTodo(4);
// todoList.updateTaskTitle(5, "купить мороженное")
// todoList.sortTasksByPriority()
// console.log(todoList.tasks);

const anotherTask = {
  tasks: [
    {
      title: "помыть посуду",
      id: 1,
      priority: 1,
      description: "описание"
    }
  ]
}

const addTodoAnotherTask = todoList.addTodo.bind(anotherTask);
addTodoAnotherTask({
  title: "помыть грушу",
  id: 1,
  priority: 1,
  description: "описание"
});

addTodoAnotherTask({
  title: "помыть кровать",
  id: 1,
  priority: 6,
  description: "описание"
});
console.log(anotherTask.tasks);

const removeTodoAnotherTask = todoList.removeTodo.bind(anotherTask);
removeTodoAnotherTask(5)

const updateTaskTitleAnotherTask = todoList.updateTaskTitle.bind(anotherTask);
updateTaskTitleAnotherTask(6, "отдохнуть")

const sortTasksByPriorityAnotherTask = todoList.sortTasksByPriority.bind(anotherTask);
sortTasksByPriorityAnotherTask();
console.log(anotherTask.tasks);