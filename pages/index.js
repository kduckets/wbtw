import Head from 'next/head'
import Link from 'next/link'
import React, {useState} from 'react';
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
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
      <GlobalStyles />
       <ThemeProvider theme={original}>
      <main>
      <div style={{
        display: showMe?"block":"none"
      }}>
    <Hourglass size={32} />
    </div>
      <Link  href="/tunes/demos">
      {/* <Window className='window'>
      <WindowHeader className='window-header'>
        <span>404.exe</span>
      </WindowHeader>
      <WindowContent>
        <p>
      <img src='error.png' height='40px'/>&nbsp;&nbsp;  fatal error: weather not found
      <br/>
      <br/>
      Please contact your systems administrator.
  
        </p>
          <br/>
          <br/>
        <Button disabled size='lg' fullWidth>Ok</Button>
      </WindowContent>
 
    </Window> */}
    <Alert

        title="404.exe"

        type='error'

        message="fatal error: weather broken"

        closeAlert={handleCloseAlert}

        hasSound='true'

        buttons={[{ value: 'OK', onClick: handleCloseAlert }]}
/>
    </Link>
 


      </main>
      <AppBar style={{position: 'relative'}}>
      <Toolbar style={{ justifyContent: 'space-between' ,position: 'relative', bottom:'0', width:'100%'}}>
        <div style={{ position: 'relative', display: 'inline-block'}}>
          <Button style={{ fontWeight: 'bold' }} onClick={playFog}>
            <img
              src='/win95.jpg'
              alt='react95 logo'
              style={{ height: '20px', marginRight: 4 }}
            />
            Start
          </Button>
          
        </div>

        {/* <TextField placeholder='Search...' width={150} /> */}
      </Toolbar>
    </AppBar>
        </ThemeProvider>
    </div>
  
  )
}
