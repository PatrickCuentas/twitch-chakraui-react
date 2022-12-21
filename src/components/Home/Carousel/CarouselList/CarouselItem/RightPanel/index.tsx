import { Avatar, Flex, Stack, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Stream } from "../../../../../../libs/models/stream.model";

const RightPanel = ({
  secondary,
  stream,
}: {
  stream: Stream;
  secondary: boolean;
}) => {
  return (
    <Stack
      bgColor="dark.500"
      paddingX="0.5rem"
      paddingTop="0.5rem"
      borderRightRadius="3px"
      gap="0.5rem"
      display={
        !secondary
          ? {
              base: "none",
              xl: "flex",
            }
          : "none"
      }
    >
      <Flex gap="0.5rem">
        <Link to={"streamer/" + stream.streamer.id}>
          <Avatar src={stream.streamer.avatar} height="50px" width="50px" />
        </Link>
        <Stack
          width="150px"
          height="full"
          justifyContent="center"
          gap="0"
          spacing="0"
        >
          <Link to={"streamer/" + stream.streamer.id}>
            <chakra.span fontSize="14px" fontWeight="600" color="primary.100">
              {stream.streamer.name}
            </chakra.span>
          </Link>
          <chakra.span fontSize="13px" color="primary.300" fontWeight="400">
            {stream.game.name}
          </chakra.span>
          <chakra.span fontSize="13.5px" fontWeight="300">
            {stream.viewers} espectadores
          </chakra.span>
        </Stack>
      </Flex>
      <Tags stream={stream} />
      <chakra.span
        width="12rem"
        fontSize="0.85rem"
        color="rgba(255,255,255,0.85)"
      >
        {stream.streamer.description}
      </chakra.span>
    </Stack>
  );
};

export default RightPanel;

export const Tags = ({ stream }: { stream: Stream }) => {
  return (
    <Flex gap="0.5rem">
      {stream.tags.map((tag) => (
        <chakra.span
          borderRadius="20px"
          bgColor="#3A3A3D"
          color="rgba(255, 255, 255, 0.8)"
          fontWeight="500"
          textAlign="center"
          width="fit-content"
          paddingX="0.6rem"
          paddingY="0.05rem"
          fontSize="13px"
          key={tag}
        >
          {tag}
        </chakra.span>
      ))}
    </Flex>
  );
};
