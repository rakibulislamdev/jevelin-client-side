import ReactPlayer from "react-player";
import { IoIosPlay } from "react-icons/io";
import videoThumbnail from "../../assets/HomePage/videothamb.jpg";

const ReactVideoPlayer = () => {
  return (
    <div className="player-wrapper mt-16 h-screen">
      <ReactPlayer
        className="react-player"
        url="https://youtu.be/g4n2yVPnQzs"
        width="100%"
        height="80%"
        playing={true}
        controls={true}
        light={<img src={videoThumbnail} alt="Video Thumbnail" />}
        playIcon={
          <button className="p-5 absolute text-grayLight bg-white rounded-full hover:bg-primary hover:text-white transition duration-300">
            <IoIosPlay size={22} />
          </button>
        }
      />
    </div>
  );
};

export default ReactVideoPlayer;
