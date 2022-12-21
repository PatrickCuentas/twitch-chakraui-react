import { Image, Stack } from "@chakra-ui/react";
import { Stream as StreamInterface } from "../../../libs/models/stream.model";
import StreamerInfo from "./StreamerInfo";

const Stream = ({ stream }: { stream: StreamInterface }) => {
  return (
    <Stack
      width="full"
      height="100vh"
      css={{
        "&::-webkit-scrollbar": {
          width: "0px",
        },
      }}
      bgColor="dark.700"
      overflowY="scroll"
      paddingBottom="5rem"
    >
      <Image
        src={stream.game.video}
        minHeight={{ base: "200px", sm: "85%" }}
        objectPosition="right"
        objectFit="cover"
        borderBottom="1px solid rgba(255,255,255, 0.15)"
      />

      <StreamerInfo stream={stream} />
    </Stack>
  );
};

export default Stream;
