import React from 'react';
// import ReactFullpage from '@fullpage/react-fullpage';
import  PageScroll  from  'react-page-scroll';
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
      <PageScroll width="100vw" height="100vh">
        <div key='index' className='page'>
          <Main />
        </div>
        <div key='invitation' className='page'>
          <Invitation />
        </div>
        <div key='schedule' className='page'>
          <Schedule />
        </div>
        <div key='wishes' className='page'>
          <Wishes />
        </div>
        <div  key='setting' className='page'>
          <Setting/>
        </div>
        <div key='thank' className='page'>
          <Thank />
        </div>
      </PageScroll>
    </div>
  );
}

export default App;
