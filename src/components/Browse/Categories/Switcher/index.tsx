import { Flex, chakra } from "@chakra-ui/react";

const Switcher = ({
  isCategory,
  setIsCategory,
}: {
  isCategory: boolean;
  setIsCategory: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Flex
      color="white"
      fontWeight="500"
      fontSize="20px"
      gap="1rem"
      userSelect="none"
    >
      <chakra.span
        paddingBottom="0.3rem"
        color={isCategory ? "primary.100" : "white"}
        _hover={{ color: "primary.300" }}
        borderBottom={isCategory ? "2px solid #bf94ff" : "none"}
        cursor="pointer"
        onClick={() => setIsCategory(true)}
      >
        Categorias
      </chakra.span>
      <chakra.span
        paddingBottom="0.3rem"
        color={!isCategory ? "primary.100" : "white"}
        borderBottom={!isCategory ? "2px solid #bf94ff" : "none"}
        _hover={{ color: "primary.300" }}
        cursor="pointer"
        onClick={() => setIsCategory(false)}
      >
        Canales en vivo
      </chakra.span>
    </Flex>
  );
};

export default Switcher;
