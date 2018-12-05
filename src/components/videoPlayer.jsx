import React, { Component } from "react";
import YouTube from "react-youtube";

class VideoPlayer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <YouTube videoId="Q88AkN1hNYM" onReady={this.onReady} />
      </React.Fragment>
    );
  }

  onReady(event) {
    console.log(event);
    setInterval(() => console.log(event.target.getCurrentTime()), 1000);
    // event.target.pauseVideo();
  }

  rateChange(aaaaaaaaaa) {
    console.log(aaaaaaaaaa);
  }
}

export default VideoPlayer;
