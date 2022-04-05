import { useSelector } from "react-redux";
import styles from "./App.module.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TaskContainer from "./components/Tasks/TaskContainer";
import Card from "./components/UI/Card";

function App() {
  //@ts-ignore TODO also check this one
  const theme = useSelector((state) => state.ui.theme);

  return (
    <main className={styles.main} data-theme={theme}>
      <div className={styles.app} data-theme={theme}>
        <Header />
        <Card>
          <InputForm />
        </Card>
        <Card>
          <TaskContainer />
        </Card>
      </div>
    </main>
  );
}

export default App;
