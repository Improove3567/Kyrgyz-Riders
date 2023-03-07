import Head from 'next/head'
import HomePage from '../src/pages/HomePage/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyrgyz Riders</title>
        <meta name="description" content="Kyrgyz Riders is tour company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  )
}