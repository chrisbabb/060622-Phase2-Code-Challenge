import React, { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

const API = 'http://localhost:8003/planeteers'

function App() {
  const [planeteers, setPlaneteers] = useState([]);
  const [search, setSearch] = useState("");
  const [theSearchResults, setTheSearchResults] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(data => setPlaneteers(data));
  }, [])

  function toggleQuote(thePlaneteer){
    if(thePlaneteer.quoteToggle){
      setTheSearchResults( theSearchResults.map((planeteer) => thePlaneteer.id === planeteer.id ? {...thePlaneteer, quoteToggle: false} : planeteer) );
    }
    else{
      setTheSearchResults( theSearchResults.map((planeteer) => thePlaneteer.id === planeteer.id ? {...thePlaneteer, quoteToggle: true} : planeteer) );
    }
    
  }

  function filterPlaneteers(searchParameters = ""){
    setSearch(searchParameters)
    searchParameters = searchParameters;
    const searchResults = planeteers.filter((planeteer) => planeteer.name.toLowerCase().includes(searchParameters) || planeteer.bio.toLowerCase().includes(searchParameters) );
    console.log(searchParameters, searchResults)
    setTheSearchResults(searchResults);
  }

  return (
    <div>
      <Header />
      <SearchBar search={search} filterPlaneteers={filterPlaneteers} />
      <RandomButton />
      <PlaneteersContainer toggleQuote={toggleQuote} planeteers={planeteers} searchResults={theSearchResults}/>
    </div>
  );
}

export default App;
