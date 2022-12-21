import { Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Stream as StreamInterface } from "../libs/models/stream.model";
import Chat from "../components/Streamer/Chat";
import Stream from "../components/Streamer/Stream";
import data from "../libs/data.json";
import useBreakpoint from "../hooks/useBreakpoint";
import closeSidebarIcon from "../assets/images/Sidebar/close-sidebar-icon.svg";
const Streamer = () => {
  const { id } = useParams();
  const [isMobile] = useBreakpoint();
  const [isChat, setIsChat] = useState(true);
  const [stream, setStream] = useState<StreamInterface>(
    data.find((stream) => stream.streamer.id === id)!
  );
  useEffect(() => {
    setStream(data.find((stream) => stream.streamer.id === id)!);
  }, [id]);
  return (
    <Flex height="100vh">
      <Stream stream={stream} />
      {!isChat && !isMobile && (
        <Image
          position="absolute"
          top="14"
          right="2"
          _hover={{
            bgColor: "rgba(0,0,0,0.7)",
          }}
          padding="0.1rem"
          borderRadius="4px"
          src={closeSidebarIcon}
          width="30px"
          height="30px"
          onClick={() => setIsChat(true)}
          cursor="pointer"
        />
      )}

      {!isMobile && isChat && <Chat isChat={isChat} setIsChat={setIsChat} />}
    </Flex>
  );
};

export default Streamer;
