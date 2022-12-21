import { chakra, Stack } from "@chakra-ui/react";
import Categories from "../components/Browse/Categories";
import ExploreCategories from "../components/Browse/ExploreCategories";
const Browse = () => {
  return (
    <Stack
      padding="2rem"
      height="100%"
      overflowY="scroll"
      css={{
        "&::-webkit-scrollbar": {
          width: "0px",
        },
      }}
    >
      <chakra.span fontWeight="700" fontSize="3.5rem" color="white">
        Explorar
      </chakra.span>
      <Stack gap="1.8rem">
        <ExploreCategories />
        <Categories />
      </Stack>
    </Stack>
  );
};

export default Browse;
