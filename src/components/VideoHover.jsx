import { useRef } from "react";

const VideoOnHover = ({ src }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.pause();
  };

  return (
    <video
      ref={videoRef}
      muted={true}
      loop
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=" absolute rounded-lg border-2 border-slate-500 hover:scale-105 hover:border-4 hover:border-slate-950 hover:origin-center transition-all duration-300 h-52"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoOnHover;
