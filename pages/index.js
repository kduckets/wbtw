import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, Hourglass, Divider, AppBar, Toolbar, Button, TextField, Window, WindowHeader, WindowContent, Panel} from 'react95';
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
// import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
// import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;


export default function Home() {
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

      <Link  href="/tunes/demos">
      <Window className='window'>
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
        <Button disabled size='lg' fullWidth>Fix</Button>
      </WindowContent>
 
    </Window>
    </Link>
    <Hourglass size={32} />


      </main>
      <AppBar style={{position: 'relative'}}>
      <Toolbar style={{ justifyContent: 'space-between' ,position: 'relative', bottom:'0', width:'100%'}}>
        <div style={{ position: 'relative', display: 'inline-block'}}>
          <Button

            style={{ fontWeight: 'bold' }}
          >
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
