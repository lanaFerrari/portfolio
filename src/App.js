import "./App.css";
import React from "react";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Main isCollapsed={isCollapsed} />
      <Footer />
    </>
  );
}

export default App;
