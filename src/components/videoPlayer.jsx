import React, { Component } from "react";
import YouTube from "react-youtube";

class VideoPlayer extends Component {
  render() {
    return (
      <React.Fragment>
        <YouTube videoId="Q88AkN1hNYM" onReady={this.onReady} />
      </React.Fragment>
    );
  }

  onReady = event => {
    setInterval(
      () => this.props.updateCurrentTime(event.target.getCurrentTime()),
      250
    );
    // event.target.pauseVideo();
  };
}

export default VideoPlayer;
