import { chakra, Flex, Image } from "@chakra-ui/react";
import closeSidebarIcon from "../../../../assets/images/Sidebar/close-sidebar-icon.svg";
import chatParticipantsIcon from "../../../../assets/images/Chat/chat-participants.svg";
const Header = ({
  setIsChat,
}: {
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      padding="0.8rem"
      paddingY="1rem"
    >
      <ChatIcon src={closeSidebarIcon} handler={() => setIsChat(false)} />
      <chakra.span fontWeight="600" fontSize="16px" color="#dedee3">
        CHAT DEL STREAM
      </chakra.span>
      <ChatIcon src={chatParticipantsIcon} handler={() => {}} />
    </Flex>
  );
};

export default Header;

const ChatIcon = ({ src, handler }: any) => {
  return (
    <Image
      onClick={handler}
      css={{
        transform: "scaleX(-1)",
      }}
      _hover={{
        bgColor: "#464649",
      }}
      borderRadius="4px"
      cursor="pointer"
      src={src}
      objectFit="cover"
      height="26px"
      width="26px"
      padding="0.1rem"
    />
  );
};
