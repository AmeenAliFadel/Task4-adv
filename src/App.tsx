import Deals from './components/Deals/Deals'
import DreamHome from './components/DreamHome/DreamHome'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Navbar from './components/Navbar/Navbar'
import Trending from './components/Trending/Trending'
import './index.css'
import Logo from './assets/img/logo.png';
import { useEffect, useState } from 'react'
import Loader from './components/Loader/Loader'
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      once: false,
      mirror: true
    });
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;


  return (
    <>
      <Navbar
        logo={Logo}
        btn="Login"
      />
      <Hero
        title="Discover a place you will love to live"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Imperdiet tempus felis vitae sit est quisque."
      />
      <HowItWorks />
      <DreamHome
        title="Find Dream Home"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <Trending />
      <Deals />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
