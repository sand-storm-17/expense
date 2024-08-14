import React from 'react'
import "./Sidebar.css"
import { HiOutlineLightBulb, HiOutlineCurrencyRupee, HiOutlineDatabase, HiOutlineChartPie, HiOutlineCreditCard, HiWrenchScrewdriver } from "react-icons/hi";
import { GoGear } from "react-icons/go";
import Link from 'next/link';


const Sidebar = () => {
    return (
        <container className="sidebar bg-gradient1 px-8 py-5">
            <div className="upper flex-col">
                <Link href="/" className="profile flex px-3">
                    <img src={"./next.svg"} alt="avatar" className="flex w-2/6 border-none rounded-full overflow-hidden" />
                    <div className='username text-lg flex w-4/6 m-3'>Nitansh</div>
                </Link>
                <Link href="/" className="feature">
                    <HiOutlineLightBulb className='text-2xl' />
                    <span className='featureName grow-[1] text-lg'>Insights</span>
                </Link>
                <Link href='/cards' className="feature">
                    <HiOutlineCreditCard className='text-2xl' />
                    <span className='featureName grow-[2] text-lg'>Cards</span>
                </Link>
                <Link href="/" className="feature">
                    <HiOutlineChartPie className='text-2xl' />
                    <span className='featureName grow-[3] text-lg'>Splitwise</span>
                </Link>
                <Link href="/" className="feature">
                    <HiOutlineDatabase className='text-2xl' />
                    <span className='featureName grow-[1] text-lg'>Utilities</span>
                </Link>
                <Link href="/" className="feature">
                    <HiOutlineCurrencyRupee className='text-2xl' />
                    <span className='featureName grow-[2] text-lg'>Tracker</span>
                </Link>
            </div>

            <row className="lower feature">
                <GoGear className='text-2xl' />
                <span className='featureName text-lg'>Settings</span>
            </row>
        </container>
    )
}

export default Sidebar
