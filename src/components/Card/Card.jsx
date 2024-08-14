import React from 'react'
import "./Card.css";

const Card = (props) => {
    return (
        <div class="flex justify-around py-1.8 px-4 container bg-gradient1 card text-black">
                <div className="flex justify-between items-center">
                    <img src="https://i.imgur.com/8ANWXql.png" width="20" height="20" />
                    <img src="https://i.imgur.com/SsTSozr.png" width="40" />
                </div>
                <div className="mt-3">
                    <span className="mr-2">{props.number}</span>
                </div>
                <div className="flex justify-between card-details mt-3 mb-3">
                    <div className="flex flex-col">
                        <span className="light">Card Holder</span>
                        <span>{props.name}</span>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col mr-3">
                            <span className="light">Expired</span>
                            <span>{props.expiry}</span></div>
                        <div className="flex flex-col">
                            <span className="light">CVV</span>
                            <span>{props.cvv}</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Card
