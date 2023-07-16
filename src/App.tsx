import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Main } from "./views/Main/Main";
import { Invitation } from "./views/Invitation/Invitation";
import { Schedule } from "./views/Schedule/Schedule";
import { Wishes } from "./views/Wishes/Wishes";
import { HeartLoader } from "./components/HeartLoader";
import s from "./views/Main/Main.module.scss";
import './App.css';
import {Thank} from "./views/Thank/Thank";
import {Setting} from "./views/Setting/Setting";

function App() {

  return (
    <div className="App">
      <HeartLoader />
      <img className={s.shadowOverlay} src="/images/leafs-shadow.png" alt=""/>
      <ReactFullpage
        credits={{}}
        licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
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
            <div  key='setting' className='section'><Setting/></div>
            <div key='thank' className='section'>
              <Thank />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

export default App;
