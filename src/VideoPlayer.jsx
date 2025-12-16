import { useEffect, useRef, useState } from "react";
import video from "./assets/video.mp4";

function VideoPlayer() {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  // const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const setVideoDuration = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", setVideoDuration);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", setVideoDuration);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (video.muted === true) {
      video.muted = false;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);

    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const toggleFullscreen = () => {
    const container = videoRef.current.parentElement;
    if (!document.fullscreenElement) {
      container.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const updateProgressTracker = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = percent * duration;
  };

  return (
    <div>
      <div className="w-200 overflow-hidden rounded-lg shadow-2xs">
        <div className="relative size-full">
          <div className="size-full">
            <video
              ref={videoRef}
              loop
              className="aspect-video"
              src={video}
            ></video>
          </div>

          <div className="group absolute top-0 flex size-full items-end overflow-hidden rounded-lg bg-transparent">
            <div className="w-full bg-linear-to-t from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.001)] px-3 py-2 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
              {/* duration tracker  */}
              <div className="mb-4">
                <div
                  onClick={(e) => {
                    updateProgressTracker(e);
                  }}
                  className="relative h-1 w-full cursor-pointer rounded-full bg-[rgb(0,0,0,0.3)] transition-all"
                >
                  <div
                    style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                    className="before:-translate-Y-1/2 absolute top-0 left-0 z-10 h-full rounded-tl-full rounded-bl-full bg-red-600 before:absolute before:-top-1 before:-right-0.5 before:h-3 before:w-3 before:rounded-full before:bg-red-600"
                  ></div>
                  <div className="absolute top-0 left-0 h-full w-0"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* play pause button  */}
                  <div
                    onClick={togglePlay}
                    className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.2)] transition-colors hover:bg-[rgba(0,0,0,0.3)]"
                  >
                    <div>
                      {isPlaying ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 stroke-white stroke-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 stroke-white stroke-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* mute unmute button  */}
                  <div
                    onClick={toggleMute}
                    className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.2)] transition-colors hover:bg-[rgba(0,0,0,0.3)]"
                  >
                    <div>
                      {isMuted ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 stroke-white stroke-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 stroke-white stroke-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* duration setting  */}
                  <div className="flex h-9 cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.2)] px-3 transition-colors hover:bg-[rgba(0,0,0,0.3)]">
                    <div className="flex items-center justify-center gap-y-0.5">
                      <span className="text-sm font-medium text-white">
                        {formatTime(currentTime)}
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 stroke-white stroke-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9 20.247 6-16.5"
                          />
                        </svg>
                      </span>
                      <span className="text-sm font-medium text-white">
                        {formatTime(duration)}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Expand full screen  */}
                <div
                  onClick={toggleFullscreen}
                  className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.2)] transition-colors hover:bg-[rgba(0,0,0,0.3)]"
                >
                  <div>
                    {isFullscreen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 stroke-white stroke-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                        />
                      </svg>
                    ) : (
                      <i class="fa-solid fa-expand text-white"></i>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
