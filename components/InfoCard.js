import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Zoom from 'react-reveal/Zoom';


const InfoCard = ({ img, location, title, description, star, price, total}) => {

    const [heart,setHeart] = React.useState(false)

    return (
        <Zoom left>
        <div className="p-6 box-border flex flex-col md:flex-row lg:flex-row rounded-xl bg-white dark:bg-gray-700 shadow-sm hover:shadow-xl transition duration-300 ease-linear my-2 select-none">
            <div className="relative w-full h-52 md:w-52  lg:h-52 lg:w-52 flex-shirnk-0 rounded-xl shadow-xl overflow-hidden">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-xl hover:scale-105 transition duration-500 ease-in-out cursor-pointer" />
            </div>

            <div className="flex flex-col flex-grow pl-0 pt-5 md:pt-0 lg:pt-0 md:pl-5 lg:pl-5">
                <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-sm dark:text-gray-200">{location}</p>

                    {heart ? <AiFillHeart className="w-7 cursor-pointer text-red-400 text-2xl dark:text-red-400"  onClick={() => setHeart(!heart)} /> : <AiOutlineHeart className="w-7 cursor-pointer text-gray-600 text-2xl dark:text-gray-200" onClick={() => setHeart(!heart)} />

}
                </div>

                <h4 className="text-xl text-gray-800 font-semibold dark:text-white">{title}</h4>
 
                <div className="border-b w-10 pt-2 border-gray-400"/>

                <p className="text-gray-500 text-sm pt-2 flex-grow dark:text-gray-200">{description}</p>

                <div className="flex items-end pt-5 justify-between">
                    <p className="flex items-center space-x-2 pt-4">
                        <FaStar className="text-red-400"/>
                        <span className="text-gray-500 dark:text-white">{star}</span>
                    </p>

                    <div>
                        <p className="text-gray-700 dark:text-white text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                        <p className="text-gray-500 dark:text-gray-200 text-right text-extralight text-sm">{total}</p>
                    </div>
                </div>
            </div>
        </div>
        </Zoom>
    )
}

export default InfoCard
