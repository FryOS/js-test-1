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

todoList.addTodo({ title: "сходить в магазин", id: 4, priority: 5 });
todoList.addTodo({ title: "сходить в магазин", id: 5, priority: 5 });
todoList.removeTodo(4);
todoList.updateTaskTitle(5, "купить мороженное")
todoList.sortTasksByPriority()
console.log(todoList.tasks);
