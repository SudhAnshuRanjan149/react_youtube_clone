// GLOBAL
import { Stack, Box } from "@mui/material";

// LOCAL
import { VideoCard, ChannelCard } from "./";

// CSS
import "./style.css";

const Videos = ({ videos, direction }) => {
  return (
    <div className="videos-feed">
      {videos !== null ? (
        videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard ChannelDetail={item} />}
          </Box>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Videos;
