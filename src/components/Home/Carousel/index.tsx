import { Flex } from "@chakra-ui/react";
import CarouselList from "./CarouselList";

const Carousel = () => {
  return (
    <Flex
      position="absolute"
      top="0"
      height="350px"
      width="full"
      alignItems="center"
      justifyContent="center"
      color="white"
    >
      <CarouselList />
    </Flex>
  );
};

export default Carousel;
