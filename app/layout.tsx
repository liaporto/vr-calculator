import Head from 'next/head'
import Footer from '../components/general/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head>
        <title>VR Calculator</title>
        <meta name="description" content="VR Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
          {children}
      </body>
      <Footer/>
    </html>
  )
}
