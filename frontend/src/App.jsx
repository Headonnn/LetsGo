import React from "react";
import "./index.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import Nouveautes from "./components/Nouveautes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [api,setApi] = useState([])
  const hehe= ()=>{
  axios.get("https://data.paysdelaloire.fr/api/records/1.0/search/?dataset=234400034_070-002_offre-touristique-fetes_et_manifestations-rpdl&q=&rows=1779&facet=categorie&facet=commune&facet=periodicite&facet=tarifgratuit&facet=resaenligneouinon&facet=departement%22")
  .then(((response) => { return response.data}))
  .then ((data)=>{setApi(data.result);console.log(data)})
  .catch((err) => {console.warn('attention')})
}
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
