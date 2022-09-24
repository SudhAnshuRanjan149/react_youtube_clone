import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import { videoDetails, relatedVideos } from "./../utils/DataObj";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <>
      <div className="video-player-container">
        <Stack direction={{ xs: "column", md: "row" }}>
          <div className="video-player-div">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <div className="video-player-div-title">{title}</div>

            <Stack direction="row" gap="20px" alignItems="center">
              <Typography varient="body1" sx={{ opacity: 0.7, color: "#fff" }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography varient="body1" sx={{ opacity: 0.7, color: "#fff" }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>

            <div className="video-playing-detail">
              <Link to={`/channel/${channelId}`}>
                <div className="video-playing-channel-title">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </div>
              </Link>

              <button className="subscribe-btn">Subscribe</button>
            </div>

            <div className="video-player-div-description">{description}</div>
          </div>

          <div className="related-videos">
            <Videos videos={videos} direction="column" />
          </div>
        </Stack>
      </div>
    </>
  );
};

export default VideoDetail;
