import React from "react";
import "./index.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import Nouveautes from "./components/Nouveautes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Categories />
      <Nouveautes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
