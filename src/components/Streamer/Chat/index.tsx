import { Box, Stack, chakra } from "@chakra-ui/react";

import Messages from "./Messages";
import Input from "./Input";
import Header from "./Header";

const Chat = ({
  isChat,
  setIsChat,
}: {
  isChat: boolean;
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Box>
      {isChat && (
        <Stack
          minWidth="380px"
          maxWidth="380px"
          bgColor="dark.500"
          borderLeft="1px solid rgba(255,255,255, 0.15)"
          height="95vh"
          paddingBottom="0.5rem"
          color="white"
          justifyContent="space-between"
          divider={
            <chakra.div
              height="0.009rem"
              bgColor="rgba(255,255,255, 0.15)"
              border="0"
            />
          }
        >
          <Header setIsChat={setIsChat} />
          <Messages />
          <Input />
        </Stack>
      )}
    </Box>
  );
};

export default Chat;
