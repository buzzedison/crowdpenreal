import '@/styles/globals.css'


import GoogleAnalytics from "../components/GoogleAnalytics";

function App({ Component, pageProps }) {
  

  return (
  <>
  {process.env.NEXT_PUBLIC_GA_ID && (
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
  )}
  <Component {...pageProps} />
</>
  )
}

export default App;
