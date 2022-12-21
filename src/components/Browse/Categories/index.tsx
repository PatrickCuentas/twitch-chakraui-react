import { Box, Stack } from "@chakra-ui/react";
import { useState } from "react";
import ChannelsList from "../../Home/Channels/ChannelsList";
import CategoryList from "./CategoryList";
import FilterInput from "./FilterInput";
import Switcher from "./Switcher";

const Categories = () => {
  const [isCategory, setIsCategory] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");

  return (
    <Box>
      <Stack gap="1rem">
        <Switcher setIsCategory={setIsCategory} isCategory={isCategory} />
        <FilterInput setQuery={setQuery} />
        {isCategory ? <CategoryList query={query} /> : <ChannelsList />}
      </Stack>
    </Box>
  );
};

export default Categories;
