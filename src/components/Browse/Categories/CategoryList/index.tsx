import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import data from "../../../../libs/data.json";
import { Stream } from "../../../../libs/models/stream.model";
import CategoryCard from "./CategoryCard";
const CategoryList = ({ query }: { query: string }) => {
  const [categories] = useState<Stream["game"][]>(
    data
      .map((stream) => stream.game)
      .filter((v, i, a) => a.findIndex((t) => t.name === v.name) === i)
  );
  return (
    <Flex color="white" gap="0.7rem" wrap="wrap">
      {categories
        .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
        .map((item) => (
          <CategoryCard key={item.name} item={item} />
        ))}
    </Flex>
  );
};

export default CategoryList;
