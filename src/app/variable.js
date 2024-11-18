import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App({ Component, pageProps }) {
 useEffect(() => {
     AOS.init({
          duration: 800,
          once: false,
        })
  }, [])
  return <Component {...pageProps} />;
}
export default MyApp;
