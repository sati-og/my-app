import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
const sectionsColor = [
  "#ff5f45",
  "#0798ec",
  "#fc6c7c",
  "#435b71",
  "orange",
  "blue",
  "purple",
  "yellow"
]

const fullpages= [
  {
    text: "Section 1"
  },
  {
    text: "Section 2"
  },
  {
    text: "Section 3"
  }
]

function App() {
  return (
    <div className="App">
      <ReactFullpage
        credits={{}}
        licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
        // navigation
        anchors={["firstPage", "secondPage", "thirdPage"]}
        // onLeave={this.onLeave.bind(this)}
        // sectionsColor={sectionsColor}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            {fullpages.map(({ text }) => (
              <div key={text} className={'section'}>
               <p>{text}</p>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
        // credits={{}}
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
