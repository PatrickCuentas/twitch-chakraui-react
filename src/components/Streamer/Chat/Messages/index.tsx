import { Stack, chakra } from "@chakra-ui/react";

const Messages = () => {
  return (
    <Stack
      height="full"
      overflowY="scroll"
      css={{
        "&::-webkit-scrollbar": {
          width: "0px",
        },
      }}
      paddingTop="0.5rem"
      paddingX="1rem"
    >
      {[
        { name: "George", message: "Nice Stream, keep it up" },
        {
          name: "Josh",
          message: "I think you should try Minecraft",
        },
      ].map(({ name, message }) => (
        <chakra.span
          fontWeight="500"
          fontSize="14px"
          color="#dedee3"
          key={name}
        >
          <chakra.span color="primary.300" fontWeight="600">
            {name}
          </chakra.span>
          : {message}
        </chakra.span>
      ))}
    </Stack>
  );
};

export default Messages;
