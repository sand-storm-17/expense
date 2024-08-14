import Card from '@/components/Card/Card'
import React from 'react'
import "./cardPage.css";

const page = () => {
    const card = {name: "ABC XYZ", cvv: "000", expiry: "00/00", number:"111111111111", limit: 10000};
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
                            placeholder="Card Number"
                            required
                        />
                    </div>
                    <div className='flex  flex-1 flex-col'>
                        <label htmlFor="cardHolder">Name on card</label>
                        <input
                            className='border'
                            id="cardNumber"
                            type="text"
                            placeholder="Name on the Card"
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
                                placeholder="Expiry Month"
                                required
                            />
                            <input
                                className='border'
                                id="expirationYear"
                                type="text"
                                placeholder="Expiry Year"
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
                            placeholder="CVV Code"
                            required
                        />
                    </div>
                    <div className='flex flex-1 flex-col'>
                        <label htmlFor="cardLimit">Spend Limit</label>
                        <input
                            className='border'
                            id="cardLimit"
                            type="text"
                            placeholder="What's the card limit..."
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
