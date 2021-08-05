import Image from 'next/image'
const SmallCard = ({ img, title }) => {
    return (
        <div key={img} className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out mb-6">
            <div className="relative h-80 w-80 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <Image className="rounded-xl" src={img} layout="fill" />
            </div>
            <h3 className="text-2xl mt-3 text-gray-800 dark:text-white">{title}</h3>
        </div>
    )
}
 
export default SmallCard
