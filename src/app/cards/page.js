import Card from "@/components/Card/Card";
import React from "react";
import "./Cards.css";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="carousel"></div>
      <div className="flex-col grid flex-1">
        <div className="justify-around flex flex-1">
          <img id="walletImg" src="./3588982.jpg" alt="Image Not Found" />
          <div class="walletLabel">
            <h1>Your Wallet</h1>
          </div>
        </div>
        <div className="cards ">
          <Link href="/cards/card/1">
            <Card
              name={"Nitansh Ritul"}
              cvv={"111"}
              expiry={"11/26"}
              number={"3287 5982 7597 9879"}
            />
          </Link>
          <Link href="/cards/card/2">
            <Card
              name={"Nitansh Ritul"}
              cvv={"111"}
              expiry={"11/26"}
              number={"3287 5982 7597 9879"}
            />
          </Link>
          <Link href="/cards/card/3">
            <Card
              name={"Nitansh Ritul"}
              cvv={"111"}
              expiry={"11/26"}
              number={"3287 5982 7597 9879"}
            />
          </Link>
          <Link href="/cards/card/4">
            <Card
              name={"Nitansh Ritul"}
              cvv={"111"}
              expiry={"11/26"}
              number={"3287 5982 7597 9879"}
            />
          </Link>
          
        </div>
      </div>
    </>
  );
}
