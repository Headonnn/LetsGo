import Home from "./pages/Home";
import axios from 'axios'
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [api,setApi] = useState([])
  const hehe= ()=>{
  axios.get("https://data.paysdelaloire.fr/api/records/1.0/search/?dataset=234400034_070-002_offre-touristique-fetes_et_manifestations-rpdl&q=&rows=1779&facet=categorie&facet=commune&facet=periodicite&facet=tarifgratuit&facet=resaenligneouinon&facet=departement")
  .then(((response) => { return response.data}))
  .then ((data)=>{setApi(data.result);console.log(data)})
  .catch((err) => {console.warn('attention')})
}

  return (
    <div className="App">
      <Home />
      <p>coucou</p>
      <button onClick={hehe}> azdaz</button>
    </div>
  );
}

export default App;
