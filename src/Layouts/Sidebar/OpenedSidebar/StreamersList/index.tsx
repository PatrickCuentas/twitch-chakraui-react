import { Stack, chakra } from "@chakra-ui/react";
import { useState } from "react";
import { Stream } from "../../../../libs/models/stream.model";
import StreamerCard from "./StreamerCard";

const StreamersList = ({ streams }: { streams: Stream[] }) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  return (
    <Stack
      gap="0rem"
      overflowY="scroll"
      height="100%"
      css={{
        "&::-webkit-scrollbar": {
          width: "0px",
        },
      }}
    >
      {streams.slice(0, parseInt(`${isShowMore ? 14 : 6}`)).map((stream) => (
        <StreamerCard key={stream.streamer.avatar} {...stream} />
      ))}
      {!isShowMore ? (
        <chakra.button
          onClick={() => setIsShowMore(true)}
          color="rgba(255,255,255,0.75)"
          fontSize="0.9rem"
        >
          Mostrar más
        </chakra.button>
      ) : (
        <chakra.button
          onClick={() => setIsShowMore(false)}
          color="rgba(255,255,255,0.75)"
          fontSize="0.9rem"
        >
          Mostrar menos
        </chakra.button>
      )}
    </Stack>
  );
};

export default StreamersList;
