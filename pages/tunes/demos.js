import ReactPlayer from "react-player"
import Layout from '../../components/layout'
import FloppyBox from '../../components/floppybox'
import Head from 'next/head'
import { useState } from 'react'

const Demos = () => {

  const [input, setInput] = useState('')

  const submitScore = async (e) => {
    e.preventDefault()
    alert("score submitted")
  }



    return (
      <Layout>  
      <Head>
        <title>/wbtw/demos</title>
        <link rel="icon" href="/favicon.png" />
        <script type="text/javascript" src="/static/phaser.min.js"></script>
      </Head>
   
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

                   <p>kev - guitar/loud noises</p>
                 
                  </i></small>

                  <br/>
             
            <div>
              <code><a href="/" target="_blank">go home</a></code>
            </div>
           
           <div className="game">
           <FloppyBox width={420} height={420}/>
           </div>

          <div className="scoreboard">
          <small><b>scoreboard</b></small>
          <div className='p-8 justify-center items-center h-screen flex'>
            <form className='flex'>
            <input type='text'
                   placeholder='name'
                   value={input}
                onChange={e => setInput(e.target.value)}
              />
            <button type='submit' onClick={submitScore}>
             submit high score
           </button>
          </form>
          </div>
          </div>

     

          </div>     
  
        </Layout>
      )
    }

    export default Demos;
  
  