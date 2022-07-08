import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({toggleQuote, searchResults, filterPlaneteers, search}) {
  return (
    <ul className="cards">
      {searchResults.length === 0 && search ==="" ? filterPlaneteers() : searchResults.map((planeteer) => <Planeteer toggleQuote={toggleQuote} planeteer={planeteer} />)}
    </ul>
  );
}

export default PlaneteersContainer;
