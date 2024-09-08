import Card from '@/components/Card/Card'
import React from 'react'
import "../cardPage.css";

const page = () => {
    const card = {id:0, name: "Nitansh Ritul", cvv: "101", expiry: "11/26", number:"1276874874", limit: 50000};
    //TODO: Rest API to et a card by ID

    return (
        <div className='flex-1 flex justify-center'>
            <div className="board flex flex-col place-items-center">
                <Card className="card bg-purple-700" details={card}/>
                <form className='flex flex-1 flex-col'>
                    <div className='flex flex-1 flex-col'>
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                            className='border'
                            id="cardNumber"
                            type="text"
                            placeholder={card.number}
                            required
                        />
                    </div>
                    <div className='flex  flex-1 flex-col'>
                        <label htmlFor="cardHolder">Name on card</label>
                        <input
                            className='border'
                            id="cardNumber"
                            type="text"
                            placeholder={card.name}
                            required
                        />
                    </div>
                    <div className='flex  flex-1 flex-col'>
                        <label htmlFor="cardHolder">Expiration</label>
                        <div className="expiry flex justify-between flex-1">
                            <input
                                className='border'
                                id="expirationMonth"
                                type="number"
                                placeholder={card.expiry.substring(0,2)}
                                required
                            />
                            <input
                                className='border'
                                id="expirationYear"
                                type="text"
                                placeholder={card.expiry.substring(3,5)}
                                required
                            />
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col'>
                        <label htmlFor="cvvCode">CVV code</label>
                        <input
                            className='border'
                            id="cvvCode"
                            type="text"
                            placeholder={card.cvv}
                            required
                        />
                    </div>
                    <div className='flex flex-1 flex-col'>
                        <label htmlFor="cardLimit">Spend Limit</label>
                        <input
                            className='border'
                            id="cardLimit"
                            type="text"
                            placeholder={card.limit}
                            required
                        />
                    </div>
                    <div className="buttons flex justify-center">
                        <button className='border'>Cancel</button>
                        <button className='border bg-gradient1' type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page
