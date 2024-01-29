import { useEffect, useState } from "react";
// import useAnalytics from "@/hooks/useAnalytics";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

export default function Chatbox() {
  const [isComponentVisible, setIsComponentVisible] = useState(true);
  //   const { trackEvent } = useAnalytics();

  //   useEffect(() => {
  //     trackEvent("page.view", { page: "home" });
  //   }, []);

  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <div className="w-full bg-gray-100  flex flex-col justify-center   " >
    <div className="relative py-3  sm:m-auto">
      <div className="relative w-[100%]  mx-auto bg-white shadow-lg sm:rounded-3xl px-[20px] pt-[20px] pb-[80px] bg-clip-padding bg-opacity-40 border border-gray-200" style={{backdropFilter : "10px"}}>
        <div className="w-[850px] h-[500px] mx-auto">
        <Chat toggleComponentVisibility={toggleComponentVisibility} />
        </div>
      </div>
    </div>
  </div>
  );
}
