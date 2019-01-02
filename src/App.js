import React, { Component } from "react";
import InfoPanel from "./components/infoPanel";
import VideoPlayer from "./components/videoPlayer";

import { references } from "./references.json";

class App extends Component {
  state = {
    currentTime: 0,
    references: []
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
            <InfoPanel
              items={this.state.references}
              currentTime={this.state.currentTime}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  updateCurrentTime = currentTime => {
    this.setState({ currentTime });
    if (this.needToUpdateReferences()) {
      this.setState({ references: this.getCurrentReferences() });
    }
  };

  needToUpdateReferences() {
    return this.state.references.length !== this.getCurrentReferences().length;
  }

  getCurrentReferences() {
    return references
      .filter(reference => reference.time < this.state.currentTime)
      .sort((current, next) => current.time - next.time);
  }
}

export default App;
