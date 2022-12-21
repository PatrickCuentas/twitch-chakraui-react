import { Avatar, Flex, chakra, Box, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Streamer } from "../../../../../libs/models/streamer.model";

const StreamerCard = ({
  streamer,
  viewers,
  game,
}: {
  streamer: Streamer;
  viewers: number;
  game: {
    name: string;
    cover: string;
    video: string;
  };
}) => {
  return (
    <Tooltip
      label={`${streamer.name} | ${viewers} espectadores | Transmitiendo ${game.name} `}
      bgColor="dark.300"
      color="white"
      placement="right"
    >
      <Link to={"/streamer/" + streamer.id}>
        <Flex
          gap="0.2rem"
          alignItems="center"
          width="100%"
          paddingX="0.6rem"
          paddingY="0.1rem"
          _hover={{
            bgColor: "#26262C",
          }}
          cursor="pointer"
        >
          <Flex gap="0.5rem" width="80%" alignItems="center">
            <Avatar width="30px" height="30px" src={streamer.avatar} />
            <Flex justifyContent="center" flexDirection="column" gap="0">
              <chakra.span fontSize="15px" fontWeight="500">
                {streamer.name}
              </chakra.span>
              <chakra.span fontSize="14px" fontWeight="300" color="#adadb8">
                {game.name}
              </chakra.span>
            </Flex>
          </Flex>

          <Flex alignItems="center" alignSelf="flex-start" gap="0.5rem">
            <Box borderRadius="50%" bgColor="red" width="8px" height="8px" />
            <chakra.span fontSize="14px" fontWeight="300" color="#d8d8d8">
              {viewers}
            </chakra.span>
          </Flex>
        </Flex>
      </Link>
    </Tooltip>
  );
};

export default StreamerCard;
