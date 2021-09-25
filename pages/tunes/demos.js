import ReactPlayer from "react-player"
import Layout from '../../components/layout'
import FloppyBox from '../../components/floppybox'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import fire from '../../config/fire-config';
import LinesEllipsis from 'react-lines-ellipsis'

const Demos = () => {


  const [input, setInput] = useState('')
  const [scores, setScores] = useState([]);  useEffect(() => {
    fire.database()
      .ref('users')
      .once('value')
      .then(snap => {
        const scores = snap.val()
        const scores_sorted = Object.entries(scores).sort((a, b) => parseFloat(b[1].score) - parseFloat(a[1].score));
        setScores(scores_sorted) 
      } );
    }, []);  


  const submitScore = async (e) => {

    e.preventDefault()

    if(input){
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
        const scores_sorted = Object.entries(scores).sort((a, b) => parseFloat(b[1].score) - parseFloat(a[1].score))
        setScores(scores_sorted) 
      })
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
        const scores_sorted = Object.entries(scores).sort((a, b) => parseFloat(b[1].score) - parseFloat(a[1].score))
        setScores(scores_sorted) 
      })
    }
  }
}



    return (
      <Layout>  
      <Head>
        <title>/wbtw/demos</title>
        <link rel="icon" href="/favicon.png" />
        <script type="text/javascript" src="/static/phaser.min.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <meta name="description" content="Fuzzy, proggy, mathy, jazzy, occasionally danceable, usually mad about something rock from Boston." />
        <meta name="twitter:card" value="we broke the weather demos"/>
        <meta property="og:title" content="we broke the weather demos" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webroketheweather.com/" />
        <meta property="og:image" content="https://webroketheweather.com/wbtw-midway.jpg" />
        <meta property="og:description" content="Fuzzy, proggy, mathy, jazzy, occasionally danceable, usually mad about something rock from Boston." /> 
        <script
           async
           src="https://www.googletagmanager.com/gtag/js?id=G-M4C8FHNH82"
          />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-M4C8FHNH82');
              `,
          }}
        />
      </Head>
   
            <h1>/wbtw_demos</h1>
        {/* <div className="card">
          <code>the_covid_sessions</code>
          <div>
         <ReactPlayer
        url="https://soundcloud.com/webroketheweather/sets/the-covid-sessions-demos"
        width="100%"
        height="440px"
        config={{
          soundcloud: {
            options: { auto_play: true }
          }
        }}
         />
        </div>
        </div>  
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

                   <p>kev - guitar/loud noises</p></i>

                   <p><a className="email" href="mailto:webroketheweather@gmail.com">webroketheweather@gmail.com</a></p>
                 
                  </small>

                  <br/>
                 
             
            <div>
              <a href="https://membership.onlineaction.org/site/Donation2?df_id=19284&19284.donation=form1&addl_info=nav-button&conversion_pg=www.edf.org%2F&_ga=2.192113130.1549475860.1607045714-634390749.1607045714" 
              target="_blank">
              <button class="glow-on-hover">fix the weather</button>
              </a>
            </div> */}
           
           <div className="game">
           <FloppyBox width={420} height={420}/>
           </div>

          <div className="scoreboard">
          <b>scoreboard</b>
           <table>
             <tbody>
            {
            
            scores.map((item =>
            <tr key={item[0]}> 
             <td>
               <small>
             <LinesEllipsis
                text={item[1].name}
                maxLine='6'
                ellipsis='...'
                trimRight
                basedOn='letters'
              />
              </small>
            </td>
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
              <br/>
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
  
  