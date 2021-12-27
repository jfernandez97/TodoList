export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";

export const addTask = (task) => ({
  type: ADD_TASK,
  task: task,
});

export const completeTask = (id) => ({
  type: COMPLETE_TASK,
  taskId: id,
});
