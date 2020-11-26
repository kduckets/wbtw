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
        height="440px"
         />
        </div>
        </div>  
        <div className="card">
        <code>demos_2019</code>
          <div>
         <ReactPlayer
        url="https://soundcloud.com/webroketheweather/sets/demos-2019"
        width="100%"
        height="580px"
   
         />
        </div>
        </div>
          <div>
              <br/>
              <small><i><b>all wbtw demos were recorded in scott's basement and mixed by scott</b>
                 
                 <p>wbtw is:</p> 

                   <p>nick - keys, sax, flute, etc, vocals</p>
                  
                   <p>andy - drums, vocals, count-offs</p>
                 
                   <p>steve - bass, moog, brown notes</p>
                     
                   <p>scott - guitar, sax, vocals, garage banding</p>

                   <p>kev - guitar, loud noises</p>
                 
                  </i></small>

                  <br/>
             
          <div>
         
              <code><a href="/" target="_blank">go home</a></code>
       
            </div>
            
          </div>
      

         
        </Layout>
        
      )
    }

  
  