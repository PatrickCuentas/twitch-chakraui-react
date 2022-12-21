import { chakra } from "@chakra-ui/react";
import LeftSide from "./LeftSide";
import Input from "./Input";
import RightSide from "./RightSide";

const NavBar = () => {
  return (
    <chakra.nav
      display="flex"
      alignItems="center"
      bgColor="dark.500"
      padding="0.25rem 0.85rem 0.5rem 0.25rem"
      boxShadow="md"
      zIndex="2"
      position="sticky"
    >
      <LeftSide />
      <Input />
      <RightSide />
    </chakra.nav>
  );
};

export default NavBar;
