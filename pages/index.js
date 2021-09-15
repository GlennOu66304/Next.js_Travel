import Head from 'next/head'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

export default function Home() {
  return (
      <div>
      <Head>
         <title> Travel site</title>
          <meta name='keywords' content='web'/>
      </Head>

          <Navbar/>

          <HeroSection />

          <Cards/>

          <Footer/>
    </div>
  )
}
