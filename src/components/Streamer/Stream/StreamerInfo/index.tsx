import { Avatar, Box, Stack, chakra, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Stream } from "../../../../libs/models/stream.model";

const StreamerInfo = ({ stream }: { stream: Stream }) => {
  const { streamer } = stream;
  return (
    <Stack padding="0.5rem" gap="2rem">
      <Flex gap="1rem" alignItems="center">
        <Box position="relative" marginLeft="1rem">
          <Avatar
            height="84px"
            width="84px"
            src={streamer.avatar}
            border={`3px solid red`}
          />
          <chakra.span
            position="absolute"
            bottom="-0.5"
            left="2.5"
            bgColor="#EB0400"
            border="1px solid #0E0E10"
            borderRadius="4px"
            paddingX="0.4rem"
            fontSize="13px"
            color="white"
            fontWeight="bold"
          >
            EN VIVO
          </chakra.span>
        </Box>
        <Stack spacing="0" gap="0">
          <chakra.span fontWeight="700" fontSize="19px" color="white">
            {streamer.name}
          </chakra.span>
          <chakra.span fontWeight="600" fontSize="15px" color="white">
            Playing {stream.game.name}
          </chakra.span>
          <Link to="/browse">
            <chakra.span
              fontWeight="500"
              fontSize="14px"
              color="primary.100"
              cursor="pointer"
            >
              {stream.game.name}
            </chakra.span>
          </Link>
        </Stack>
      </Flex>

      <Stack
        width="95%"
        alignSelf="center"
        bgColor="dark.500"
        minHeight="250px"
        color="white"
        paddingTop="2.5rem"
        paddingLeft="3rem"
      >
        <Text fontSize="25px" fontWeight="500">
          About {streamer.name}
        </Text>
        <Text color="whiteAlpha.700" fontSize="1rem">
          <chakra.span fontWeight="600">{streamer.followers}</chakra.span>{" "}
          seguidores
        </Text>
        <Text>{streamer.description} </Text>
      </Stack>
    </Stack>
  );
};

export default StreamerInfo;
