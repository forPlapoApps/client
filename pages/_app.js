import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>forPlapoApps | 工数見積もりの革命</title>
        <meta property="og:description" content="全てはミーティングのために。forPlapoAppsは工数見積もりに革命を起こします" key="title" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
