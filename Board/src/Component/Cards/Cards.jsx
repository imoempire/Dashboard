import React, { useState } from "react";
import "./Cards.css";
import Card from "../Card/Card";
import { cardsData as card } from "../Data/Data";

const Cards = () => {
  return (
    <div className="Cards">
      {card.map((item, index) => {
        return (
          <div key={index} className="container">
            <Card
              title={item.title}
              color={item.color}
              barValue={item.barValue}
              png={item.png}
              series={item.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
