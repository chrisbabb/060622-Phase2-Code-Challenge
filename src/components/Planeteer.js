import React from "react";

function Planeteer({planeteer, toggleQuote}) {
  const {bio, fromUSA, name, pictureUrl, quote, twitter, quoteToggle} = planeteer;
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={pictureUrl}
          alt={name}
          className="card__image"
          onClick={() => toggleQuote(planeteer)}
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{quoteToggle ? bio : quote}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>
              {
                fromUSA ? "USA-Based" : "Working overseas"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
