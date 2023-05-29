"use client";

const VideoPlayer = ({ videoId }) => {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  
    return (
        <div className="pt-12 pb-12">
      <div className="relative h-0 overflow-hidden max-w-screen-xl mx-auto w-3/4" style={{ paddingBottom: '56.25%', height: 0 }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      </div>
    );
  };
  
  export default VideoPlayer;
