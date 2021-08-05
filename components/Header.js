import Image from 'next/image'
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { RiGlobalLine } from 'react-icons/ri';
import { BsToggleOff } from 'react-icons/bs';
import { BsToggleOn } from 'react-icons/bs';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-2
        md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 bg-transparent shadow-xl py-5 px-5 md:px-10">
            {/* left  */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto col-span-1">
                <Image src="/../public/assets/airbnb.svg" 
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                />
            </div>

            {/* Middle  */}
            <div className="col-span-1 hidden md:inline-flex lg:inline-flex xl:inline-flex">
                <div className="flex items-center border-2 border-gray-200 px-3 rounded-full py-2 space-x-2 shadow-sm w-full">
                    <input className="border-0 flex-grow focus:outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search" />
                    <AiOutlineSearch className="bg-red-400 rounded-full text-white p-2 w-8 h-8 cursor-pointer "/>
                </div>
            </div>

            {/* Right  */}
            <div className="col-span-1 flex items-center space-x-3 justify-end text-gray-500 cursor-pointer">
                <BsToggleOff className="text-2xl"/>
                <p className="hidden md:inline">Become a host</p>
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
