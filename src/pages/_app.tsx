import Head from 'next/head'
import 'app/core/styles/index.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>forPlapoApps | 工数見積もりの革命</title>
        <meta name="description" content="全てはミーティングのために。forPlapoAppsは工数見積もりに革命を起こします。" key="description" />
        <meta property="og:image" content="https://res.cloudinary.com/dlzivlqnw/image/upload/v1673950688/forPlapoApps/fwsz2dcfifixnz7j69yv.jpg" key="image" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async () => ({ pageProps: {}})

export default MyApp
