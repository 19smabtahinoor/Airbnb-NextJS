import Image from 'next/image'

const Banner = () => {
    return (
        <div className="relative -top-24 h-[350px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
            <Image src="/assets/mainBanner.jpg"
            layout="fill"
            objectFit="cover"
            />

            <div className="absolute flex flex-col justify-end h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] pb-0 md:pb-3 lg:pb-16 px-5 md:px-10 lg:px-24 xl:px-24">
                <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl  font-bold w-[300px] xl:w-[400px] ">
                    Olympian & 
                    Paralympian 
                    Online
                    Experiences
                </h1>
                <button className="transition duration-150 ease-in-out text-black bg-white rounded-lg shadow-md w-[150px] px-6 py-2 my-6 hover:shadow-xl hover:bg-black hover:text-white active:scale-90">Explore Now</button>
            </div>
        </div>
    )
}

export default Banner
