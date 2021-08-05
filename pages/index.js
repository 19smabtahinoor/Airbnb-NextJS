import Head from 'next/head'
import Header from '../components/Header'
import { ThemeProvider } from '../components/Theme/themeContext'

export default function Home() {
  return (

   <ThemeProvider>
    <div className="bg-white dark:bg-gray-800 transition-all">
      <Head>
        <title>Airbnb || SM Abtahi Noor</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header/>
      {/* Banner  */}
    </div>
    </ThemeProvider>
  )
}
