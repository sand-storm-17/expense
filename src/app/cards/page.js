import Card from '@/components/Card/Card'
import React from 'react'

export default function page() {
  return (
    <>
      <div className='carousel'>
      
      </div>
      <div className='allCards '>
        <Card name={"Nitansh Ritul"} cvv={"111"} expiry={"11/26"} number={"3287 5982 7597 9879"}/>
        <Card name={"Kumar Sandeep"} cvv={"111"} expiry={"11/26"} number={"3287 5982 7597 9879"}/>
        <Card name={"Pranav Prakhar"} cvv={"111"} expiry={"11/26"} number={"3287 5982 7597 9879"}/>
      </div>
    </>
  )
}
