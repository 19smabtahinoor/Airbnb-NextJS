import Image from 'next/image'
import { useState } from 'react';
import { AiOutlineSearch, AiOutlineMenu, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { RiGlobalLine } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import ToggleTheme from './Theme/ToggleTheme';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

const Header = ({placeholder}) => {
    // const [header,setHeader] = useState(false)
    // const [logo,setLogo] = useState(false)
    // const [icon,setIcon] = useState(false)
    // const [placeholderText, setPlaceholderText] = useState(false)

    //date range states
    const [searchInput,setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [userCount,setUserCount] = useState(1)
    const router = useRouter();
    // const handleChange = () => {
    //     if (window.scrollY >= 80) {
    //         setHeader(true)
    //         setLogo(true)
    //         setIcon(true)
    //         setPlaceholderText(true)
          
    //     } else {
    //         setHeader(false)
    //         setLogo(false)
    //         setIcon(false)
    //         setPlaceholderText(false)
          
    //     }
    // }
    // if (process.browser) {
    //    window.addEventListener("scroll", handleChange)
    // }

    //date range implement 

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:"selection"
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    //hide date pickers 
    const resetInput = () => {
        setSearchInput('')
    }

    //user count operation 
    const userIncrease = () => {
        setUserCount(userCount + 1)
    }
    const userDecrease = () => {
        if(userCount > 1){
            return setUserCount(userCount - 1)
        }else {
            return setUserCount(1)
        }
    }
    //search page 
    const search = () => {
        router.push({
            pathname:'/search',
            query:{
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests: userCount
            }
        })
    }

    return (
        <header className= "transition duration-300 ease-linear sticky top-0 z-50 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 bg-white dark:bg-gray-800 shadow-xl py-5 px-5 md:px-10 lg:px-24 xl:px-24">
        {/* <header className={
            header ? "transition duration-300 ease-linear sticky top-0 z-50 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 bg-white dark:bg-gray-800 shadow-xl py-5 px-5 md:px-10 lg:px-24 xl:px-24" : "sticky top-0 z-50 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 bg-transparent py-5 px-5 md:px-10 lg:px-24 xl:px-24 transition duration-300 ease-linear"}> */}
            {/* left  */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto col-span-1">
                <Image src="/assets/airbnb.svg" 
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                onClick={() => router.push("/")}
                />
            </div>

            {/* Middle  */}
            <div className="col-span-1 hidden md:inline-flex lg:inline-flex xl:inline-flex">
                <div className="flex items-center border-2 border-gray-200 px-3 rounded-full py-2 space-x-2 shadow-sm w-full">
                    <input 
                    className="border-0 flex-grow focus:outline-none bg-transparent text-sm text-gray-600 dark:text-white placeholder-gray-400"
                    type="text"
                    placeholder={placeholder || "Start your search" }
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <AiOutlineSearch className="bg-red-400 rounded-full text-white p-2 w-8 h-8 cursor-pointer "/>
                </div>
            </div>

            {/* Right  */}
            <div className="col-span-1 flex items-center space-x-3 justify-end text-gray-500 cursor-pointer transition duration-300">
                <ToggleTheme/>
                <p className="hidden lg:inline">Become a host</p>
                <RiGlobalLine className="text-xl"/>

                <div className="transition duration-200 flex items-center space-x-2 border border-gray-500 rounded-full px-3 py-2 hover:bg-gray-500 hover:text-white">
                    <AiOutlineMenu className="text-xl"/>
                    <FaUserCircle className="text-xl"/>
                </div>
            </div>

            {searchInput && (
                <div className="absolute inset-x-0 w-[400px] md:w-[600px] lg:w-[600px] xl:w-[600px]  mt-24 mx-auto bg-white p-6 rounded-xl shadow-xl box-border overflow-auto scrollbar-hide">
                    <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={['#FF5A5F']}
                    onChange={handleSelect}
                    />

                    <div className="flex items-center border-t border-gray-200 py-6 mt-3">
                        <h2 className="text-gray-600 font-semibold text-xl flex-grow">Number of Guests</h2>

                        <div className="flex items-center space-x-3">
                            <FiUsers className="text-gray-600 text-xl"/>
                            <div className="flex items-center space-x-3 text-xl">
                                <AiOutlineMinus onClick={userDecrease} className="bg-red-400 text-white shadow-xl rounded-full p-1 w-6 h-6 cursor-pointer font-semibold"/>
                                <span className="text-gray-600 font-bold select-none">{userCount}</span>
                                <AiOutlinePlus onClick={userIncrease} className="bg-red-400 text-white shadow-xl rounded-full p-1 w-6 h-6 cursor-pointer font-semibold"/>
                            </div>
                        </div>
                    </div>

                    {/* {button } */}

                    <div className="flex justify-end space-x-6 border-t border-gray-200 pt-6">
                        <button className=" text-gray-400" onClick={resetInput}>Cancel</button>
                        <button className="rounded-full px-4 py-2 border border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition duration-300 ease-in w-[150px]" onClick={search}>Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
