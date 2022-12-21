import { chakra, Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

const Layouts = ({ children }: { children: React.ReactChild }) => {
  const [isSidebar, setIsSidebar] = useState<boolean>(true);
  return (
    <chakra.div
      className="App"
      height="100vh"
      display="flex"
      flexDirection="column"
      position="sticky"
      overflowY="hidden"
    >
      <NavBar />
      <Flex height="full" width="full">
        <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
        <Box width="full" bgColor="dark.700">
          {children}
        </Box>
      </Flex>
    </chakra.div>
  );
};

export default Layouts;
