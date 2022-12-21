import { Avatar, Flex, Image, Stack, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Stream } from "../../../libs/models/stream.model";
import { Tags } from "../Carousel/CarouselList/CarouselItem/RightPanel";

const ChannelCard = ({ stream }: { stream: Stream }) => {
  return (
    <Stack
      width={{ base: "full", sm: "220px", lg: "280px" }}
      marginBottom="1rem"
    >
      <Image
        width="full"
        height="190px"
        objectFit="cover"
        src={stream.game.image}
      />
      <Flex gap="0.5rem" alignItems="center">
        <Link
          to={`streamer/${stream.streamer.id}`}
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Avatar
            src={stream.streamer.avatar}
            height="40px"
            width="40px"
            alignSelf="flex-start"
          />
        </Link>
        <Stack spacing="0" justifyContent="center">
          <Link
            to={`streamer/${stream.streamer.id}`}
            style={{ display: "flex" }}
          >
            <chakra.span
              fontWeight="500"
              fontSize="0.9rem"
              _hover={{ color: "primary.100" }}
            >
              En {stream.game.name}
            </chakra.span>
          </Link>
          <Link
            to={`streamer/${stream.streamer.id}`}
            style={{ display: "flex" }}
          >
            <chakra.span
              fontSize="0.8rem"
              fontWeight="400"
              _hover={{ color: "primary.100" }}
              color="#ADADB8"
            >
              {stream.streamer.name}
            </chakra.span>
          </Link>
          <chakra.span fontSize="0.8rem" fontWeight="400" color="#ADADB8">
            {stream.game.name}{" "}
          </chakra.span>
          <Flex paddingTop="0.2rem">
            <Tags stream={stream} />
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default ChannelCard;
