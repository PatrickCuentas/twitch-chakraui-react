import { Image, Stack, chakra } from "@chakra-ui/react";
import { Stream } from "../../../../libs/models/stream.model";

const CategoryCard = ({ item }: { item: Stream["game"] }) => {
  return (
    <Stack w="174px" spacing="0">
      <Image h="233px" w="full" src={item.cover} objectFit="cover" />
      <chakra.span fontWeight="500" fontSize="1rem" color="#DEDEE3">
        {item.name}
      </chakra.span>
      <chakra.span fontWeight="400" fontSize="0.85rem" color="#ADADB8">
        {item.viewers} k espectadores
      </chakra.span>
    </Stack>
  );
};
export default CategoryCard;
