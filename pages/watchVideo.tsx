import React, { useEffect, useMemo, useState } from "react";
import Header from "../src/components/Header/Header";
import { Player } from "video-react";
import "node_modules/video-react/dist/video-react.css";

const BlogMain = () => {
    const [devise, setDevice] = useState()
    const [close, setClose] = useState(false)
    const handleSelect = (selectedDevice: any) => {
        setDevice(selectedDevice);
        setClose(true);
    };
    if (!devise && !close) {
        return (
            <div className="modal-overlay">
                <div className="modal">
                    <h2 className="modal-title">What device are you using currenlty?</h2>
                    <div className="modal-buttons">
                        <button className="modal-button" onClick={() => handleSelect("Phone")}>
                            Phone
                        </button>
                        <button className="modal-button" onClick={() => handleSelect("Сomputer")}>
                            Сomputer
                        </button>
                    </div>
                </div>
            </div>
        )
    } else {
        if (devise == 'Phone') {
            return (
                <div>
                    <Header />
                    <div className="video-player">
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src="https://firebasestorage.googleapis.com/v0/b/kyrgyz-riders.appspot.com/o/videoplayback.mp4?alt=media&token=adb5be15-926e-4877-855e-773c51cbcd3f"
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <Header />
                    <div className="video-player">
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src="https://firebasestorage.googleapis.com/v0/b/kyrgyz-riders.appspot.com/o/videoplayback.mp4?alt=media&token=adb5be15-926e-4877-855e-773c51cbcd3f"
                        />
                    </div>
                </div>
            );
        }
    }

};

export default BlogMain;
