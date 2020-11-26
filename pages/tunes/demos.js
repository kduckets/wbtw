import Link from 'next/link'
import ReactPlayer from "react-player"
import Layout from '../../components/layout'

export default function Demos() {
    return (
        <Layout>  
            <h1>wbtw demos</h1>
        <div className="card">
          <code>demos 2020</code>
          <div>
         <ReactPlayer
        url="https://soundcloud.com/webroketheweather/sets/demos-2020"
        width="100%"
         />
        </div>
        </div>  
        <div className="card">
        <code>demos 2019</code>
          <div>
         <ReactPlayer
        url="https://soundcloud.com/webroketheweather/sets/demos-2019"
        width="100%"
         />
        </div>
        </div>
          <footer>
              <small><i>wbtw demos were recorded in scott's basement and mixed by scott</i></small>
          </footer>

          <Link href="/">
              <code><a>go home</a></code>
            </Link>
        </Layout>
        
      )
    }

  
  