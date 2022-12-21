import {
  Stack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import IconContainer from "../../../Icon";
import chatEmote from "../../../../assets/images/Chat/chat-emote.svg";
const ChatInput = () => {
  return (
    <Stack minHeight="100px" padding="9px">
      <InputGroup size="md">
        <Input
          placeholder="Enviar un mensaje"
          width="full"
          height="45px"
          fontSize="0.85rem"
          _placeholder={{
            color: "rgba(255,255,255,0.7)",
          }}
          bgColor="dark.100"
          borderRadius="3px"
          border="none"
        />
        <InputRightElement height="full">
          <IconContainer
            icon={chatEmote}
            label="hey"
            onHover={{ bgColor: "rgba(255,255,255,0.2)" }}
          />
        </InputRightElement>
      </InputGroup>

      <Button
        alignSelf="flex-end"
        bgColor="primary.500"
        _hover={{ bgColor: "primary.700" }}
        paddingX="10px"
        paddingY="5px"
        height="30px"
        width="50px"
        fontSize="0.85rem"
        borderRadius="4px"
      >
        Chat
      </Button>
    </Stack>
  );
};

export default ChatInput;
