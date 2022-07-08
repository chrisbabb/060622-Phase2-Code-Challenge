import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planeteers, toggleQuote, searchResults}) {
  return (
    <ul className="cards">
      {searchResults.length === 0 ? planeteers.map((planeteer) => <Planeteer toggleQuote={toggleQuote} planeteer={planeteer} />) : searchResults.map((planeteer) => <Planeteer toggleQuote={toggleQuote} planeteer={planeteer} />)}
    </ul>
  );
}

export default PlaneteersContainer;
