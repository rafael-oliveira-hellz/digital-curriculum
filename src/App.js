// import { dom } from '@fortawesome/fontawesome-svg-core'
import React from "react";
// dom.watch() // This will kick off the initial replacement of i to svg tags and configure a MutationObserver
import GeneralDataCard from "./Components/GeneralDataCard";
import RightDataArea from "./Components/RightDataArea";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <input type="checkbox" name="dark-mode" id="dark-mode"></input>

      <div className="dark-mode" id="dark-container">

        <div className="dark-mode-switcher-area">
          <label htmlFor="dark-mode" className="dark-mode-switcher-button"></label>
        </div>

        <div className="container margin-top">
          <main>
            <GeneralDataCard />
            <RightDataArea />
          </main> 

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
