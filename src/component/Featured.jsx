import React, { useState, useEffect, useRef } from "react";
import "./Featured.scss";
import { PlayCircleOutline, Info } from "@mui/icons-material";

function Featured() {
  const [isActive, setIsActive] = useState(false);
  const playBoxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (playBoxRef.current && !playBoxRef.current.contains(event.target)) {
        setIsActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [playBoxRef]);

  const togglePlayBox = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="featured">
        <div className="box_shadow"></div>
        <div className="container">
          <div className="featured_info">
            <img
              className="featured_logo"
              src="/img/cyberpunk.png"
              alt="cyberpunk"
            ></img>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              enim maiores odio eligendi tempora labore harum illum, voluptatum
              libero consequuntur!
            </p>
            <div className="icon_box">
              <PlayCircleOutline className="icon" onClick={togglePlayBox} />
              <div
                className={isActive ? "play_box-active" : "play_box"}
                ref={playBoxRef}
              >
                <div className="container_box">
                  <div className="video">
                    <iframe
                      width="1260"
                      height="615"
                      src="https://www.youtube.com/embed/akHMPv5x3Sw?si=Vd9GQKCEKIng4SH8"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen={true}
                    ></iframe>
                  </div>
                  <div className="container_text">
                    <h3 className="video_text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos, laudantium?
                    </h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Minima quo vel adipisci atque distinctio consectetur?
                      Nihil earum et sapiente saepe.
                    </p>
                  </div>
                </div>
              </div>
              <Info className="icon" onClick={togglePlayBox} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
