import Head from 'next/head'
import Link from 'next/link'
import React, {useState} from 'react';
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'ms_sans_serif';
  }
`;


export default function Home() {

const [showMe, setShowMe] = useState(false);
const handleCloseAlert = () => toggleShowAlert(false);

function playFog(){
  // new Audio(audio).play();
  setShowMe(!showMe);
}

  return (
    <div className="container">
      <Head>
        <title>we broke the weather</title>
        <link rel="icon" href="/favicon.png" />
        <script type="text/javascript" src="/static/phaser.min.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <meta name="description" content="Fuzzy, proggy, mathy, jazzy, occasionally danceable, usually mad about something rock from Boston." />
        <meta name="twitter:card" value="we broke the weather"/>
        <meta property="og:title" content="we broke the weather" />
        <meta property="og:type" content="article" />
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
     
      <main>
      </main>
        </div>
  
  )
}
