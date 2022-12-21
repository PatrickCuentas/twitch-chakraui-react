import OpenedSidebar from "./OpenedSidebar";
import ClosedSidebar from "./ClosedSidebar";
import { useState } from "react";
import data from "../../libs/data.json";
import useBreakpoint from "../../hooks/useBreakpoint";
import { Stream } from "../../libs/models/stream.model";
interface Props {
  isSidebar: boolean;
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar = ({ setIsSidebar, isSidebar }: Props) => {
  const [streams] = useState<Stream[]>([...data]);
  const [isMobile] = useBreakpoint();
  return (
    <>
      {isSidebar && !isMobile ? (
        <OpenedSidebar setIsSidebar={setIsSidebar} streams={streams} />
      ) : (
        <ClosedSidebar setIsSidebar={setIsSidebar} streams={streams} />
      )}
    </>
  );
};

export default Sidebar;
