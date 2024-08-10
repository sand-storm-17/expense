import React from 'react'
import "./Sidebar.css"
import { HiOutlineLightBulb, HiOutlineCurrencyRupee, HiOutlineDatabase, HiOutlineChartPie, HiOutlineCreditCard, HiWrenchScrewdriver } from "react-icons/hi";
import { GoGear } from "react-icons/go";
import Link from 'next/link';


const Sidebar = () => {
    return (
        <container className="sidebar bg-gradient1 px-8 py-5">
            <div className="upper flex-col">
                <row className="profile flex px-3">
                    <img src={"./next.svg"} alt="avatar" className="flex w-2/6 border-none rounded-full overflow-hidden" />
                    <div className='username text-lg flex w-4/6 m-3'>Nitansh</div>
                </row>
                <row className="feature">
                    <HiOutlineLightBulb className='text-2xl' />
                    <Link href="/" className='featureName grow-[1] text-lg'>Insights</Link>
                </row>
                <row className="feature">
                    <HiOutlineCreditCard className='text-2xl' />
                    <Link href='/cards' className='featureName grow-[2] text-lg'>Cards</Link>
                </row>
                <row className="feature">
                    <HiOutlineChartPie className='text-2xl' />
                    <span className='featureName grow-[3] text-lg'>Splitwise</span>
                </row>
                <row className="feature">
                    <HiOutlineDatabase className='text-2xl' />
                    <span className='featureName grow-[1] text-lg'>Utilities</span>
                </row>
                <row className="feature">
                    <HiOutlineCurrencyRupee className='text-2xl' />
                    <span className='featureName grow-[2] text-lg'>Tracker</span>
                </row>
            </div>

            <row className="lower feature">
                <GoGear className='text-2xl' />
                <span className='featureName text-lg'>Settings</span>
            </row>
        </container>
    )
}

export default Sidebar
