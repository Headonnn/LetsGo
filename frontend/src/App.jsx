import React from "react";
import "./components/index.scss";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Categories from "./components/categories/Categories";
import Nouveautes from "./components/nouveautes/Nouveautes";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

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
