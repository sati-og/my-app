import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Main } from "./views/Main/Main";
import { Invitation } from "./views/Invitation/Invitation";
import { Schedule } from "./views/Schedule/Schedule";
import { Wishes } from "./views/Wishes/Wishes";
import { HeartLoader } from "./components/HeartLoader";
import {Thank} from "./views/Thank/Thank";
import {Setting} from "./views/Setting/Setting";
import { ShadowOverlay } from "./components/ShadowOverlay";
import s from './App.module.scss';
import './App.css';

function App() {

  return (
    <div className={s.App}>
      <HeartLoader />
      <ShadowOverlay />
      <div key='index' className={s.section}>
        <Main />
      </div>
      <div key='invitation' className={s.section}>
        <Invitation />
      </div>
      <div key='schedule' className={s.section}>
        <Schedule />
      </div>
      <div key='wishes' className={s.section}>
        <Wishes />
      </div>
      <div  key='setting' className={s.section}>
        <Setting />
      </div>
      <div key='thank' className={s.section}>
        <Thank />
      </div>
    </div>
  );
}

export default App;
