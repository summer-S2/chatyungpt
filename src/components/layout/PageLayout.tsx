import { ReactNode, useEffect, useRef, useState } from "react";
import { Header } from "../features/Header";
import { Sidebar } from "../features/Sidebar";
import { useWindowSize } from "@reactuses/core";

interface Prop {
  children: ReactNode;
}

export const PageLayout = ({ children }: Prop) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { width } = useWindowSize();
  const prevWidth = useRef<number | null>(null);

  useEffect(() => {
    // 이전 너비가 768 이상이었고, 현재 너비가 768 이하로 줄어든 경우
    if (prevWidth.current !== null && prevWidth.current > 768 && width <= 768) {
      setOpenSidebar(false);
    }

    // 이전 너비가 768 이하였고, 현재 너비가 768 이상으로 커진 경우
    if (prevWidth.current !== null && prevWidth.current <= 768 && width > 768) {
      setOpenSidebar(true);
    }

    // 현재 너비를 prevWidth에 저장
    prevWidth.current = width;
  }, [width]);

  return (
    <div className="bg-white dark:bg-zinc-800 w-screen h-screen ">
      <div className="flex h-full">
        <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
        <div className="flex flex-col flex-1">
          <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
          <div className="flex flex-col flex-1 w-full max-w-[768px] m-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
