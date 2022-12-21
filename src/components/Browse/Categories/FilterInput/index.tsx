import { Flex, chakra, Box, Image, Input } from "@chakra-ui/react";
import { debounce } from "lodash";
import searchIcon from "../../../../assets/images/Browse/search-icon--gray.svg";
const FilterInput = ({
  setQuery,
}: {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const updateQuery = (e: any) => setQuery(e?.target?.value);
  const debouncedOnChange = debounce(updateQuery, 250);
  return (
    <Flex color="white" gap="0.5rem" alignItems="center">
      <chakra.span fontSize="13px" fontWeight="600">
        Filtrar por
      </chakra.span>
      <Flex bgColor="#3E3E40" borderRadius="5px">
        <Box alignSelf="center" justifyContent="center" paddingX="0.5rem">
          <Image src={searchIcon} height="20px" color="#3E3E40" />
        </Box>
        <Input
          border="0"
          onChange={debouncedOnChange}
          bgColor="#3E3E40"
          fontSize="13px"
          _placeholder={{
            color: "#C5C5C6",
          }}
          _focus={{
            border: "none",
          }}
          width="190px"
          paddingX="0"
          height="30px"
          placeholder="Buscar etiquetas"
        />
      </Flex>
    </Flex>
  );
};

export default FilterInput;
