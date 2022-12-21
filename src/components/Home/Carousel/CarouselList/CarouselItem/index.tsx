import { Flex, Image } from "@chakra-ui/react";
import { Stream } from "../../../../../libs/models/stream.model";
import RightPanel from "./RightPanel";
const CarouselItem = ({
  zIndex,
  src,
  left,
  secondary,
  stream,
}: {
  zIndex: string;
  src: string;
  left: string;
  secondary: boolean;
  stream: Stream;
}): JSX.Element => {
  return (
    <Flex
      cursor={secondary ? "pointer" : ""}
      zIndex={zIndex}
      shadow="2xl"
      position="absolute"
      transform={{
        base: "translateX(0)",

        lg: `translateX(${left}) ${
          secondary
            ? left.includes("18")
              ? "scale(0.9)"
              : "scale(0.8)"
            : "scale(1)"
        }`,
      }}
      filter={{
        base: "",
        lg: `${
          secondary
            ? left.includes("18")
              ? "brightness(0.3)"
              : "brightness(0.2)"
            : "brightness(1)"
        }`,
      }}
      _hover={{
        filter: "brightness(1)",
      }}
    >
      <Image
        src={src}
        width={{
          base: "195px",
          xs: "350px",
          sm: "530px",
        }}
        height={{
          base: "150px",
          xs: "250px",
          sm: "300px",
        }}
        objectFit="cover"
        borderLeftRadius="3px"
      />
      <RightPanel stream={stream} secondary={secondary} />
    </Flex>
  );
};
export default CarouselItem;
