import React, { Component } from "react";
import Header from "./components/header";
import InfoPanel from "./components/infoPanel";
import VideoPlayer from "./components/videoPlayer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div id="container">
          <div className="video-player">
            <VideoPlayer />
          </div>
          <div className="info-panel">
            <InfoPanel />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
