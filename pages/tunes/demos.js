import Link from 'next/link'
import ReactPlayer from "react-player"
import Layout from '../../components/layout'

export default function Demos() {
    return (
        <Layout>  
            <h1>/wbtw_demos</h1>
        <div className="card">
          <code>demos_2020</code>
          <div>
         <ReactPlayer
        url="https://soundcloud.com/webroketheweather/sets/demos-2020"
        width="100%"
         />
        </div>
        </div>  
        <div className="card">
        <code>demos_2019</code>
          <div>
         <ReactPlayer
        url="https://soundcloud.com/webroketheweather/sets/demos-2019"
        width="100%"
         />
        </div>
        </div>
          <div>
              <br/>
              <small><i><b>all wbtw demos were recorded in scott's basement and mixed by scott</b>
                 
                 <p>wbtw is:</p> 
                  
                   <p>andy - drums, vocals, count-offs</p>
                 
                   <p>steve - bass, moog, brown notes</p>
                  
                   <p>nick - keys, sax, flute, bass clarinet, etc, vocals</p>
                
                   <p>scott - guitar, sax, vocals, garage banding</p>

                   <p>kev - guitar w/ cool pedals</p>
                 
                  </i></small>

                  <br/>
             
          <div>
           <Link href="/">
              <code><a>go home</a></code>
            </Link>
            </div>
            
          </div>
      

         
        </Layout>
        
      )
    }

  
  