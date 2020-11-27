import ReactPlayer from "react-player"
import Layout from '../../components/layout'
import FloppyBox from '../../components/floppybox'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import fire from '../../config/fire-config';


const Demos = () => {

  const [input, setInput] = useState('')
  const [scores, setScores] = useState([]);  useEffect(() => {
    fire.database()
      .ref('users')
      .once('value')
      .then(snap => {
        const scores = snap.val()
        setScores(scores) 
      } );
    }, []);  


  const submitScore = async (e) => {

    e.preventDefault()

    var scoreData = {
    name: input,
    score: localStorage.getItem('high_score')
    };

    const uid = localStorage.getItem('uid');
    
    if(!uid){
    var newPostKey = fire.database().ref('users').push().key;
    localStorage.setItem('uid', newPostKey);
    var updates = {};
    updates['/users/' + newPostKey] = scoreData;
    alert("score submitted")
    fire.database().ref().update(updates);
    fire.database()
      .ref('users')
      .once('value')
      .then(snap => {
        const scores = snap.val()
        setScores(scores) })
    }else
    {
      var updates = {};
      updates['/users/' + uid] = scoreData;
      alert("score submitted")
      fire.database().ref().update(updates);
      fire.database()
      .ref('users')
      .once('value')
      .then(snap => {
        const scores = snap.val()
        setScores(scores) })
    }
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
          <b>scoreboard</b>
           <table>
             <tbody>
            {Object.entries(scores).map((item =>
            <tr key={item[0]}> 
              <td><small>{item[1].name}</small></td>
              <td><small>{item[1].score}</small></td>     
            </tr>
             ))}
             </tbody>
            </table>


          <div>
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
  
  