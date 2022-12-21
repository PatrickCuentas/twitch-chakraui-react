import { Tooltip, Box, Image, PlacementWithLogical } from "@chakra-ui/react";

const IconContainer = ({
  icon,
  label,
  onHover,
  placement,
}: {
  icon: string;
  label: string;
  onHover?: {};
  placement?: PlacementWithLogical | undefined;
}) => {
  return (
    <Tooltip
      hasArrow
      label={label}
      bgColor="white"
      color="dark"
      placement={placement ? placement : "bottom"}
    >
      <Box
        cursor="pointer"
        padding="0.3rem"
        borderRadius="sm"
        _hover={onHover ? onHover : { bgColor: "dark.100" }}
      >
        <Box position="relative" width="1.25rem" height="1.255rem">
          <Image src={icon} />
        </Box>
      </Box>
    </Tooltip>
  );
};

export default IconContainer;
