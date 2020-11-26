import Link from 'next/link'
import ReactPlayer from "react-player"
import Layout from '../../components/layout'

export default function Demos() {
    return (
        <Layout>  
            <h1>Demos</h1>
        <div className="card">
          <code>demos 2020</code>
          <div>
         <ReactPlayer
        url="https://soundcloud.com/webroketheweather/sets/demos-2020"
        width="420px"
         />
        </div>
        </div>  
        <div className="card">
        <code>demos 2019</code>
          <div>
         <ReactPlayer
        url="https://soundcloud.com/webroketheweather/sets/demos-2019"
        width="420px"
         />
        </div>
        </div>
          <h2>
            <Link href="/">
              <code><a>go home</a></code>
            </Link>
          </h2>

        </Layout>
      )
    }

  
  