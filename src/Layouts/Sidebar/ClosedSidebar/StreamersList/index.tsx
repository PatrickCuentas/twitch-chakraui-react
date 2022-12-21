import { Stack } from "@chakra-ui/react";
import { Stream } from "../../../../libs/models/stream.model";
import StreamerCard from "./StreamerCard";

const StreamersList = ({ streams }: { streams: Stream[] }) => {
  return (
    <Stack
      gap="0rem"
      overflowY="scroll"
      alignItems="center"
      height="100vh"
      paddingBottom="8rem"
      css={{
        "&::-webkit-scrollbar": {
          width: "0px",
        },
      }}
    >
      {streams.map(({ streamer }) => (
        <StreamerCard key={streamer.avatar} streamer={streamer} />
      ))}
    </Stack>
  );
};

export default StreamersList;
