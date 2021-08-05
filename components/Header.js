import Image from 'next/image'
import { useState } from 'react';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { RiGlobalLine } from 'react-icons/ri';
import ToggleTheme from './Theme/ToggleTheme';


const Header = () => {
    const [header,setHeader] = useState(false)
    const [logo,setLogo] = useState(false)
    const [icon,setIcon] = useState(false)
    const [placeholderText, setPlaceholderText] = useState(false)

    const handleChange = () => {
        if (window.scrollY >= 80) {
            setHeader(true)
            setLogo(true)
            setIcon(true)
            setPlaceholderText(true)
          
        } else {
            setHeader(false)
            setLogo(false)
            setIcon(false)
            setPlaceholderText(false)
          
        }
    }
   
    window.addEventListener("scroll",handleChange)
    return (
        <header className={
            header ? "transition duration-300 ease-linear sticky top-0 z-50 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 bg-white shadow-xl py-5 px-5 md:px-10 lg:px-24 xl:px-24" : "sticky top-0 z-50 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 bg-transparent py-5 px-5 md:px-10 lg:px-24 xl:px-24 transition duration-300 ease-linear"}>
            {/* left  */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto col-span-1">
                <Image src="/assets/airbnb.svg" 
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                    className={!logo && "filter brightness-0 invert" }
                />
            </div>

            {/* Middle  */}
            <div className="col-span-1 hidden md:inline-flex lg:inline-flex xl:inline-flex">
                <div className="flex items-center border-2 border-gray-200 px-3 rounded-full py-2 space-x-2 shadow-sm w-full">
                    <input className={!placeholderText ? "border-0 flex-grow focus:outline-none bg-transparent text-sm text-white placeholder-white": "border-0 flex-grow focus:outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400" } type="text" placeholder="Start your search" />
                    <AiOutlineSearch className="bg-red-400 rounded-full text-white p-2 w-8 h-8 cursor-pointer "/>
                </div>
            </div>

            {/* Right  */}
            <div className={!icon ? "transition duration-300 col-span-1 flex items-center space-x-3 justify-end text-white cursor-pointer" : "col-span-1 flex items-center space-x-3 justify-end text-gray-500 cursor-pointer transition duration-300"}>
                <ToggleTheme/>
                <p className="hidden lg:inline">Become a host</p>
                <RiGlobalLine className="text-xl"/>

                <div className="transition duration-200 flex items-center space-x-2 border border-gray-500 rounded-full px-3 py-2 hover:bg-gray-500 hover:text-white">
                    <AiOutlineMenu className="text-xl"/>
                    <FaUserCircle className="text-xl"/>
                </div>
            </div>

        </header>
    )
}

export default Header
