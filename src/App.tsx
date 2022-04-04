import styles from "./App.module.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TaskContainer from "./components/Tasks/TaskContainer";
import Card from "./components/UI/Card";

function App() {
  return (
    <main className={styles.app}>
      <Header />
      <Card>
        <InputForm />
      </Card>
      <Card>
        <TaskContainer />
      </Card>
    </main>
  );
}

export default App;
