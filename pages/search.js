import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ThemeProvider } from '../components/Theme/themeContext'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Fade from 'react-reveal/Fade';

const search = ({ searchResults }) => {

    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <ThemeProvider>
            <div className="bg-gray-100 dark:bg-gray-800 transition-all">
                <Head>
                    <title>Search for {location}</title>
                    <link rel="icon" href="/favicon.svg" />
                </Head>

                <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

                <main className="flex">
                    <section className=" px-5 md:px-10 lg:px-24 xl:px-24 pt-16">

                        <Fade left>
                        <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-50 cursor-pointer py-3 " >
                            <HiOutlineArrowNarrowLeft />
                            <span className="hover:underline hover:text-red-400  " onClick={() => router.push("/")}>Back to home</span>
                        </div>
                        </Fade>

                        <Fade left>
                        <p className="text-sm text-gray-500 dark:text-gray-200">300+ Stays - {range} - for {noOfGuests} number of guests</p>
                        <h1 className="text-2xl text-gray-800 font-semibold mt-2 dark:text-white">Stays in {location}</h1>
                        </Fade>

                        <Fade left>
                        <div className="hidden md:flex lg:flex items-center space-x-3 py-4 whitespace-nowrap">

                            {/* button class styles are defined in global.css  */}
                            <p className="button">Cancellation Flexibility</p>
                            <p className="button">Type of Place</p>
                            <p className="button">Price</p>
                            <p className="button">Rooms and beds</p>
                            <p className="button">More filters</p>
                        </div>
                        </Fade>

                        <div className="flex flex-col my-12">
                            {searchResults.map(({ img, location, title, description, star, price, total }) => {
                                return (
                                    <InfoCard
                                        key={location}
                                        img={img}
                                        location={location}
                                        title={title}
                                        description={description}
                                        star={star}
                                        price={price}
                                        total={total}
                                    />
                                )
                            })}
                        </div>
                    </section>
                </main>

                <Footer />
            </div>

        </ThemeProvider>
    )
}

export default search;

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz")
        .then(
            (res) => res.json()
        );

    return {
        props: {
            searchResults,
        }
    }
}

