import { useState } from "react";
import data from "../../../libs/data.json";
import { Flex } from "@chakra-ui/react";
import { Stream } from "../../../libs/models/stream.model";
import ChannelCard from "./ChannelCard";

const ChannelsList = () => {
  const [streams] = useState<Stream[]>(data);
  return (
    <Flex
      color="white"
      gap="0.7rem"
      flexWrap="wrap"
      justifyContent={{ sm: "space-around", base: "center" }}
      paddingBottom="3rem"
    >
      {streams.slice(0, 12).map((stream) => (
        <ChannelCard key={stream.streamer.id} stream={stream} />
      ))}
    </Flex>
  );
};

export default ChannelsList;
