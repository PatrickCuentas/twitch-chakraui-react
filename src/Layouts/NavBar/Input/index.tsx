import { Box, Flex, Input, Image } from "@chakra-ui/react";
import { useState } from "react";
import searchIcon from "../../../assets/images/Header/search-icon.svg";
const NavbarInput = () => {
  const [inputText, setInputText] = useState("");
  return (
    <Flex
      alignItems="center"
      gap="0.05rem"
      flexBasis="100%"
      justifyContent="center"
    >
      <Input
        display={{
          base: "none",
          md: "flex",
        }}
        type="search"
        color="white"
        width={{
          base: "100%",
          lg: "355px",
        }}
        height="35px"
        placeholder="Buscar"
        _placeholder={{
          color: "gray.200",
          fontSize: "14px",
          fontWeight: "500",
        }}
        bgColor="dark.100"
        border="none"
        borderRightRadius="0px"
        _focus={{
          outline: "none",
          border: "0.125rem solid",
          borderColor: "primary.300",
        }}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Flex
        display={{
          base: "none",
          md: "flex",
        }}
        bgColor="#3A3A3D"
        height="35px"
        alignItems="center"
        paddingX="0.5rem"
        borderRightRadius="md"
        cursor={inputText.length < 1 ? "not-allowed" : "pointer"}
      >
        <Box position="relative" width="24px" height="24px">
          <Image src={searchIcon} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default NavbarInput;
