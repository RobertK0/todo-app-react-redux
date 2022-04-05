import {
  configureStore,
  createSlice,
  current,
} from "@reduxjs/toolkit";

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

const persistState = function (state: Task[]) {
  localStorage.setItem("todo_list", JSON.stringify(state));
};

const tasksSlice = createSlice({
  name: "task",
  initialState: {
    tasks: initialTasks,
    filter: null,
  },
  reducers: {
    add(state, action) {
      state.tasks.push({
        id: Date.now().toString(),
        text: action.payload,
        checked: false,
      });

      persistState(current(state).tasks);
    },
    remove(state, action) {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );

      persistState(current(state).tasks);
    },
    toggleCheck(state, action) {
      const task = state.tasks.find(
        (task) => task.id === action.payload
      );
      if (!task) return;
      task.checked = !task?.checked;

      persistState(current(state).tasks);
    },
    applyFilter(state, action) {
      state.filter = action.payload;
    },
    clearCompleted(state) {
      state.tasks = state.tasks.filter(
        (task) => task.checked !== true
      );

      persistState(current(state).tasks);
    },
  },
});

const initialUIState = JSON.parse(
  //@ts-ignore
  localStorage.getItem("todo_theme")
) || { theme: "dark" };

document.body.dataset.theme = initialUIState.theme;

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    toggleTheme(state, action) {
      state.theme = action.payload;
      //Wondering if this is wrong, seems to work though
      document.body.dataset.theme = current(state).theme;
      localStorage.setItem(
        "todo_theme",
        JSON.stringify(current(state))
      );
    },
  },
});

const store = configureStore({
  reducer: { tasks: tasksSlice.reducer, ui: uiSlice.reducer },
});

export const taskActions = tasksSlice.actions;
export const uiActions = uiSlice.actions;

export default store;
