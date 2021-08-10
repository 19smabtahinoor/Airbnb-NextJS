import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import { ThemeProvider } from '../components/Theme/themeContext'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
import Fade from 'react-reveal/Fade';

import SyncLoader from "react-spinners/SyncLoader";
import { css } from "@emotion/react";

const override = css`
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  min-height:100vh;
  margin: 0 auto;
`;

export default function Home({ exploreData, cardsData }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (

    <ThemeProvider>
      <div className="bg-white dark:bg-gray-800 transition-all">
        <Head>
          <title>Airbnb || SM Abtahi Noor</title>
          <link rel="icon" href="/favicon.svg" />
        </Head>

        {loading ?
          <>
            <SyncLoader color={'#F87171'} loading={loading} size={30} css={override} />
          </>
          :
          <>
            <Header />
            <Banner />

            <main className=" px-5 md:px-10 lg:px-24 xl:px-24">

              {/* Small Card Section  */}
              <section className="pt-24">
                <Fade left>
                  <h2 className="text-3xl font-semibold pb-5 text-gray-800 dark:text-white">Explore Nearby</h2>
                </Fade>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-12">

                  {exploreData.map(({ img, location, distance }) => {
                    return (
                      <SmallCard key={img} img={img} location={location} distance={distance} />
                    )
                  })}
                </div>
              </section>

              {/* big card section  */}
              <section>
                <Fade left>
                <h2 className="text-3xl font-semibold pb-8 text-gray-800 dark:text-white">Live Anywhere</h2>
                </Fade>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 pb-12 place-items-center lg:place-items-start">

                  {cardsData.map(({ img, title }) => {
                    return (
                      <MediumCard key={img} img={img} title={title} />
                    )
                  })}
                </div>
              </section>

              {/* Large Section  */}
              <LargeCard
                img="https://links.papareact.com/4cj"
                title="The Greatest Outdoors"
                description="Wishlists Created ny Airbnb."
                bottomText="Get Inspired"
              />
              <Footer />
            </main>
          </>
        }



      </div>
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').
    then(res => res.json())

  const cardsData = await fetch('https://links.papareact.com/zp1').
    then(res => res.json())

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
