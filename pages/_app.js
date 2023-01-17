import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>forPlapoApps | 工数見積もりの革命</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
