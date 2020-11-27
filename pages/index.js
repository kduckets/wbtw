import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>we broke the weather</title>
        <link rel="icon" href="/favicon.png" />
        <script type="text/javascript" src="/static/phaser.min.js"></script>
      </Head>
      <Link  href="/tunes/demos">
      <main>
        <h1 className="title">
        404
        </h1>

        <p className="description">
          <code>weather not found</code>
        </p> 
      </main>
      </Link>
      <footer>
        <Link
          href="/tunes/demos"
        >
          <small>powered by{' '}
          <span style={{color:"grey"}}>wbtw</span>
          </small>
        </Link>
      </footer>
    </div>
  )
}
