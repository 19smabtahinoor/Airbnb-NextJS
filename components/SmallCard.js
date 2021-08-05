import Image from 'next/image'
const SmallCard = ({ img, location, distance }) => {
    return (
        <div key={img} className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-300 ease-out dark:hover:bg-gray-700">

            {/* left  */}
            <div className="relative h-16 w-16">
                <Image src={img} layout="fill" className="rounded-lg" />
            </div>

            {/* right  */}
            <div>
                <h2 className="text-gray-900 dark:text-white">{location}</h2>
                <h3 className="text-gray-500 dark:text-gray-200">{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard
