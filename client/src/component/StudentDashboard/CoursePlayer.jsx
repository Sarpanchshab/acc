import { useState } from "react";

export default function VideoPlaylist() {
  const [playlist, setPlaylist] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [currentVideo, setCurrentVideo] = useState(null);

  const addVideo = () => {
    if (videoUrl) {
      setPlaylist([...playlist, videoUrl]);
      setVideoUrl("");
    }
  };

  const isYouTubeUrl = (url) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add YouTube Video URL</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
        />
        <button onClick={addVideo} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Add
        </button>
      </div>
      <div className="grid gap-2">
        {playlist.map((video, index) => (
          <div
            key={index}
            className="p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => setCurrentVideo(video)}
          >
            {video}
          </div>
        ))}
      </div>
      {currentVideo && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Now Playing</h3>
          {isYouTubeUrl(currentVideo) ? (
            <iframe
              className="w-full aspect-video rounded-lg mt-2"
              src={getYouTubeEmbedUrl(currentVideo)}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <video controls className="w-full rounded-lg mt-2">
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
}
