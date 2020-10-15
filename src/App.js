import React from "react";
import Header from "./components/Header.component";
import Siderbar from "./components/Sidebar/Sidebar.component";
import Main from "./components/MainProduct/Main.component";
import "./scss/styles.scss";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Siderbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
