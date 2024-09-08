import Card from "@/components/Card/Card";
import React from "react";
import "./Cards.css";
import Link from "next/link";

export default function page() {
  const cards = [
    {id:0, name: "Nitansh Ritul", cvv: "101", expiry: "11/26", number:"1276874874", limit: 50000},
    {id:1, name: "Nitansh Ritul", cvv: "101", expiry: "11/26", number:"1276874874", limit: 100000},
    {id:2, name: "Kumar Sandeep", cvv: "101", expiry: "11/26", number:"1276874874", limit: 40000}
  ];
  //TODO: Rest API to get all cards
  return (
    <>
      <div className="carousel"></div>
      <div className="flex-col grid flex-1">
        <Link id="addButton" href="/cards/card">Add a New Card
        </Link>
        <div className="justify-around flex flex-1">
          <img id="walletImg" src="./3588982.jpg" alt="Image Not Found" />
          <div class="walletLabel">
            <h1>Your Wallet</h1>
          </div>
        </div>
        <div className="cards ">
          {cards.map((card) => {
             return (
             <Link href={`/cards/card/${card.id}`} key={card.id}>
                <Card details={card}/>
              </Link>
             )
          })}          
        </div>
      </div>
    </>
  );
}
