

import "./App.css";

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
      <Home />
      <p>coucou</p>
    </div>
  );
}

export default App;
