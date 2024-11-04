import ReactPlayer from 'react-player'

const YoutubePlayer = ({ videoKey }) => {
  
  if (!videoKey) {
    return <p>Error: Invalid video key.</p>;
  }

  return (
    <ReactPlayer
      className="video-player"
      url={`https://www.youtube.com/watch?v=${videoKey}`}
      controls
      playing
      data-testid="youtube-player"
    />
  );
};

export default YoutubePlayer;