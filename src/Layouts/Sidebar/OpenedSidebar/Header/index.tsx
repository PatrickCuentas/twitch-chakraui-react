import { Box, chakra, Flex } from "@chakra-ui/react";
import Icon from "../../../../components/Icon";
import closeSidebarIcon from "../../../../assets/images/Sidebar/close-sidebar-icon.svg";

interface IProps {
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarHeader = ({ setIsSidebar }: IProps) => {
  return (
    <Flex
      paddingTop="0.7rem"
      alignItems="center"
      justifyContent="space-between"
      paddingX="0.6rem"
    >
      <chakra.span fontSize="0.87rem" fontWeight="bold">
        CANALES RECOMENDADOS
      </chakra.span>
      <Box onClick={() => setIsSidebar(false)}>
        <Icon icon={closeSidebarIcon} label="Colapsar" placement="right" />
      </Box>
    </Flex>
  );
};

export default SidebarHeader;
