import '../styles/globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'


function MyApp({ Component, pageProps }) {
  return (
  <>
      <GoogleAnalytics gaId="G-H9XRX3D1HW" />
      <Component {...pageProps} />
  </>)
}

export default MyApp
