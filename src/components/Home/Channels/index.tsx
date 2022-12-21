import { Stack, chakra } from "@chakra-ui/react";

import ExploreCategories from "../../Browse/ExploreCategories";
import ChannelsList from "./ChannelsList";
const Channels = () => {
  return (
    <Stack
      paddingX="1.75rem"
      paddingBottom="5rem"
      divider={
        <chakra.div
          height="0.009rem"
          bgColor="rgba(255,255,255, 0.15)"
          border="0"
        />
      }
    >
      <Stack color="white" paddingTop="3rem">
        <chakra.span fontWeight="500" fontSize="19px">
          Canales en vivo que podrían gustarte
        </chakra.span>
        <ChannelsList />
      </Stack>
      <ExploreCategories />
    </Stack>
  );
};

export default Channels;
