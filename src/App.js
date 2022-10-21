import React, { useState } from "react";
import "./App.css";
import View from "./component/View";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";

function App() {
  const [darkMode, setDarkMode] = useState();
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className="App">
      <div className="container">
        <aside className="sidebar">
          <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </aside>
        <header className="header">
          <Header darkMode={darkMode} />
        </header>
        <main className="main-view">
          <View />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
