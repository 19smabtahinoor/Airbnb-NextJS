import Image from 'next/image'
import Fade from 'react-reveal/Fade';

const LargeCard = ({ img, description,title,bottomText}) => {
    return (
        <Fade left>
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl"/>
            </div>

            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64">{title}</h3>
                <p>{description}</p>

                <button className="transition duration-150 ease-in-out text-white bg-black rounded-lg shadow-md w-[150px] px-6 py-2 my-6 hover:shadow-xl hover:bg-white hover:text-black active:scale-90">{bottomText}</button>
            </div>
        </section>
        </Fade>
    )
}

export default LargeCard
