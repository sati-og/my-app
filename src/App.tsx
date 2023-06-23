import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { Main } from "./views/Main/Main";
import { Invitation } from "./views/Invitation/Invitation";
import {Schedule} from "./views/Schedule/Schedule";
import {Wishes} from "./views/Wishes/Wishes";

function App() {
  return (
    <div className="App">
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
