import { configureStore, createSlice } from "@reduxjs/toolkit";

export type Task = {
  id: string;
  text: string;
  checked: boolean;
};

//I understand that local storage returns string or null type, and json.parse expects string. To not include additional checks, I'm gonna choose to ignore this.
const initialTasks: Task[] = JSON.parse(
  //@ts-ignore
  localStorage.getItem("todo_list")
) || [
  {
    id: "pre1",
    text: "Complete online JavaScript course",
    checked: true,
  },
  { id: "pre2", text: "Jog around the park 3x", checked: true },
  { id: "pre3", text: "10 minutes meditation", checked: true },
  { id: "pre4", text: "Read for 1 hour", checked: false },
  { id: "pre5", text: "Pick up groceries", checked: false },
  {
    id: "pre6",
    text: "Complete Todo App on Frontend Mentor",
    checked: false,
  },
];

const tasksSlice = createSlice({
  name: "task",
  initialState: { tasks: initialTasks },
  reducers: {
    add(state, action) {
      state.tasks.push({
        id: Date.now().toString(),
        text: action.payload,
        checked: false,
      });
    },
    remove(state, action) {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },
    toggleCheck(state, action) {
      const task = state.tasks.find(
        (task) => task.id === action.payload
      );
      if (!task) return;
      task.checked = !task?.checked;
    },
  },
});

const store = configureStore({ reducer: tasksSlice.reducer });

export const taskActions = tasksSlice.actions;

export default store;
