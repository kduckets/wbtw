import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>we broke the weather</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1 className="title">
        404
        </h1>

        <p className="description">
          <Link  href="/tunes/demos"><code>weather not found</code></Link>
        </p>

      </main>

      <footer>
        <Link
          href="/tunes/demos"
        >
          <small>powered by{' '}
          wbtw
          </small>
        </Link>
      </footer>

      <style jsx>{`
        
      `}</style>
    </div>
  )
}
