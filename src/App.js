import React, { Component } from "react";
import InfoPanel from "./components/infoPanel";
import VideoPlayer from "./components/videoPlayer";

class App extends Component {
  state = {
    currentTime: 0
  };

  componentDidMount() {
    document.title = "unconquered";
  }

  render() {
    return (
      <React.Fragment>
        <div id="container">
          <div className="video-player">
            <VideoPlayer updateCurrentTime={this.updateCurrentTime} />
          </div>
          <div className="info-panel">
            <InfoPanel currentTime={this.state.currentTime} />
          </div>
        </div>
      </React.Fragment>
    );
  }

  updateCurrentTime = currentTime => {
    this.setState({ currentTime });
  };
}

export default App;
