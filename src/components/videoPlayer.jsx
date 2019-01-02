import React, { Component } from "react";
import YouTube from "react-youtube";

class VideoPlayer extends Component {
  render() {
    const opts = {
      height: window.innerHeight - window.innerHeight * 0.5,
      width: window.innerWidth - window.innerWidth * 0.5,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        enablejsapi: 1
      }
    };

    return (
      <React.Fragment>
        <YouTube videoId="Q88AkN1hNYM" opts={opts} onReady={this.onReady} />
      </React.Fragment>
    );
  }

  onReady = event => {
    setInterval(
      () => this.props.updateCurrentTime(event.target.getCurrentTime()),
      250
    );
  };
}

export default VideoPlayer;
