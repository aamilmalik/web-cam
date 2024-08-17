import React, { useState, useRef } from 'react';
import Webcam from "react-webcam";

const WebCam = () => {
    const [camera, setCamera] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const webcamRef = useRef(null);

    const handleCamera = () => {
        setCamera(prevCamera => !prevCamera);
    };

    const captureImage = () => {
        const image = webcamRef.current.getScreenshot();
        setImageSrc(image);
    };

    return (
        <div>
            <button onClick={handleCamera}>
                {camera ? 'Turn Off Camera' : 'Turn On Camera'}
            </button>
            {camera && (
                <>
                    <Webcam 
                        audio={false} 
                        ref={webcamRef} 
                        screenshotFormat="image/jpeg"
                    />
                    <button onClick={captureImage}>Capture Image</button>
                </>
            )}
            {imageSrc && (
                <div>
                    <h3>Preview</h3>
                    <img src={imageSrc} alt="Captured"
                     style={{height:"100px" , width:"100px"}}
                    />
                </div>
            )}
        </div>
    );
};

export default WebCam;
