import React from 'react'
import "./Card.css";

const Card = (props) => {
    console.log(props)
    return (
        <div class="flex justify-around py-1.8 px-4 container card text-white">
                <div className="flex justify-between items-center">
                    <img src="https://i.imgur.com/8ANWXql.png" width="20" height="20" />
                    <img src="https://i.imgur.com/SsTSozr.png" width="40" />
                </div>
                <div className="mt-3">
                    <span className="mr-2">{props.details.number}</span>
                </div>
                <div className="flex justify-between card-details mt-3 mb-3">
                    <div className="flex flex-col">
                        <span className="light">Card Holder</span>
                        <span>{props.details.name}</span>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col mr-3">
                            <span className="light">Expired</span>
                            <span>{props.details.expiry}</span></div>
                        <div className="flex flex-col">
                            <span className="light">CVV</span>
                            <span>{props.details.cvv}</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Card
