import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer2 from './components/Footer2'
import Navbar2 from './components/Navbar2'
import Topbar from './components/Topbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Topbar/>
    <Navbar2/>
  <Component {...pageProps} />
  <br />
  <Footer2/>
  </>
)
}

export default MyApp
