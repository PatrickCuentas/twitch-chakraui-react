import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import data from "../../../../libs/data.json";
import { Stream } from "../../../../libs/models/stream.model";
import CarouselItem from "./CarouselItem";

const CarouselList = () => {
  const [carouselItems] = useState<Stream[]>(data);
  return (
    <Flex
      position="relative"
      width="full"
      alignItems="center"
      justifyContent="center"
    >
      {carouselItems.slice(0, 5).map((item, index) => (
        <CarouselItem
          key={item.streamer.name}
          stream={item}
          src={index === 2 ? item.game.video : item.game.image}
          left={
            index === 0 || index === 4
              ? index === 0
                ? "-255px"
                : "255px"
              : index === 1 || index === 3
              ? index === 1
                ? "-180px"
                : "180px"
              : "0px"
          }
          zIndex={
            index === 0 || index === 4
              ? "2"
              : index === 1 || index === 3
              ? "3"
              : "4"
          }
          secondary={index === 2 ? false : true}
        />
      ))}
    </Flex>
  );
};

export default CarouselList;
