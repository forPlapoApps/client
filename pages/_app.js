import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>forPlapoApps | 工数見積もりの革命</title>
        <meta name="description" content="全てはミーティングのために。forPlapoAppsは工数見積もりに革命を起こします。" key="description" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
