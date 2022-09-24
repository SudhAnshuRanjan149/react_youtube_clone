import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

// CSS
import "./style.css";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <>
      <div className="video-card">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <div
            className="video-image"
            style={{
              backgroundImage: `url(${snippet?.thumbnails?.high?.url})`,
              alt: `${snippet?.title}`,
            }}
          ></div>
        </Link>

        <div className="video-card-content">
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <div className="video-card-title">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </div>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
