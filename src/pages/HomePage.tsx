import { Box, Grid, GridItem, Image, Stack } from "@chakra-ui/react";
import Carousel from "../components/Home/Carousel";
import Channels from "../components/Home/Channels";

const HomePage = () => {
  return (
    <Stack
      width="full"
      height="full"
      overflowY="scroll"
      css={{
        "&::-webkit-scrollbar": {
          width: "0px",
        },
      }}
    >
      <Box position="relative" width="full">
        <Grid height="350px" templateColumns="repeat(48, 1fr)">
          <GridItem colSpan={13} display={{ base: "none", lg: "inline-block" }}>
            <Image
              src="https://images-na.ssl-images-amazon.com/images/G/01/dacx/AdForge/1-Left-unit--3--2cb3b8ef-2446-4b46-ad48-c48dd2d7649c._CBnull_.jpg"
              height="350px"
              width="full"
              objectFit="cover"
            />
          </GridItem>
          <GridItem colSpan={{ base: 48, lg: 22 }} bgColor="#FE1542" />
          <GridItem colSpan={13} display={{ base: "none", lg: "inline-block" }}>
            <Image
              src="https://images-na.ssl-images-amazon.com/images/G/01/dacx/AdForge/2-Right-unit--3--deb13e3d-2876-40ad-9b04-9972a0237833._CBnull_.jpg"
              height="350px"
              width="full"
              objectFit="cover"
            />
          </GridItem>
        </Grid>

        <Carousel />
      </Box>
      <Channels />
    </Stack>
  );
};

export default HomePage;
