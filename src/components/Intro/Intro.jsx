import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { useState } from "react";
import styled from "styled-components";

function Intro() {
  const [isMuted, setIsMuted] = useState(true);
  const handleBtnMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <IntroContainer>
      <ReactPlayer
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        url="https://vimeo.com/273686020"
        className="videoIntro"
      />
      <div className="infoIntro">
        <h1 className="headingIntro">NETFLIX The Rain</h1>
        <p className="overviewIntro">
          Trailer for Netflix series "The Rain" Production: Fox Devil Films GmbH
          for Netflix Amsterdam Director: Simon Ritzler Dop: Carlo Jelavic
          Editor: Michael Timmers Colorist: Mike Bothe Compositing: Stathis
          Nafpliotis
        </p>
      </div>
      {isMuted ? (
        <VscMute className="btnIconMute" onClick={handleBtnMute} />
      ) : (
        <VscUnmute className="btnIconMute" onClick={handleBtnMute} />
      )}
    </IntroContainer>
  );
}

export default Intro;

const IntroContainer = styled.div`
  background-color: var(--color-background);
  color: var(--color-white);
  position: relative;
  padding-top: 56%;
  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .infoIntro {
    position: absolute;
    top: 160px;
    left: 30px;
    padding: 50px;
    @media (max-width: 800px) {
      top: 120px;
      left: 25px;
      padding: 30px;
    }
    @media (max-width: 600px) {
      top: 100px;
      left: 15px;
      padding: 20px;
    }
    .headingIntro {
      font-size: 68px;
      color: #e50914;
      @media (max-width: 800px) {
        font-size: 20px;
      }
    }
    .overviewIntro {
      max-width: 560px;
      width: 100%;
      font-size: 18px;
      padding-top: 50px;
      @media (max-width: 800px) {
        max-width: 360px;
      }
    }
  }
  .btnIconMute {
    position: absolute;
    top: 50%;
    right: 5%;
    height: 40px;
    width: 40px;
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 50%;
    color: #bbb;
    padding: 6px;
    transition: all 0.3s ease;
    &:hover {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.2);
      transform: scale(1.2);
    }
  }
`;
