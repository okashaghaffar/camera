import React, { Component } from "react";

class CameraApp extends Component {
  videoRef = React.createRef();

  async componentDidMount() {
    try {
      const constraints = {
        video: {
          facingMode: { exact: "environment" }, // Use the back camera
        },
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  }

  render() {
    return (
      <div>
        <h1>Camera App</h1>
        <video
          ref={this.videoRef}
          autoPlay
          playsInline
          width="640"
          height="480"
        ></video>
      </div>
    );
  }
}

export default CameraApp;
