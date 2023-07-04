import React, { useEffect, useState } from 'react';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { Main } from "./views/Main/Main";
import { Invitation } from "./views/Invitation/Invitation";
import {Schedule} from "./views/Schedule/Schedule";
import {Wishes} from "./views/Wishes/Wishes";
import { HeartLoader } from "./components/HeartLoader";

function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100000)
  }, [])

  return (
    <div className="App">
      {!loaded && (
        <HeartLoader />
      )}
      <ReactFullpage
        credits={{}}
        licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
        // navigation
        anchors={["firstPage", "secondPage", "thirdPage", "wishesPage"]}
        render={() => (
          <ReactFullpage.Wrapper>
              <div key='index' className='section'>
                <Main />
              </div>
              <div key='invitation' className='section'>
                <Invitation />
              </div>
            <div key='schedule' className='section'>
              <Schedule />
            </div>
            <div key='wishes' className='section'>
              <Wishes />
            </div>
          </ReactFullpage.Wrapper>
        )}
        // //fullpage options
        // licenseKey = {'YOUR_KEY_HERE'}
        // scrollingSpeed = {1000} /* Options here */
        //
        // render={({ state, fullpageApi }) => {
        //   return (
        //     <ReactFullpage.Wrapper>
        //       <div className="section">
        //         <Invitation />
        //
        //       </div>
        //       <div className="section">
        //         <Schedule />
        //
        //       </div>
        //       <div className="section">
        //         <Wishes />
        //
        //       </div>
        //     </ReactFullpage.Wrapper>
        //   );
        // }}
      />
    </div>
  );
}

export default App;
