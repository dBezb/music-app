import React from "react";
import MainPage from "./pages/mainPage/MainPage";
import styles from "./global.module.scss";
import PlayBar from "./components/PlayBar/PlayBar";

function App() {
  return (
    <div className={styles.wrapper}>
      <MainPage />
      <PlayBar />
    </div>
  );
}

export default App;
