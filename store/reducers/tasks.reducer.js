import { ADD_TASK, COMPLETE_TASK } from "../actions/tasks.actions";

const initalState = {
  tasks: [],
};

const tasksReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.task] };
    case COMPLETE_TASK:
      const taskFilter = state.tasks.filter(
        (task) => task.key !== action.taskId
      );
      return { ...state, tasks: taskFilter };
    default:
      return { ...state };
  }
};

export default tasksReducer;
