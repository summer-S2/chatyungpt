import { useWindowSize } from "@reactuses/core";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import { GPTLogoIcon } from "../../assets/icons/GPTLogoIcon";
import { Link, useLocation } from "react-router-dom";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const Sidebar = ({ open, onClose }: Props) => {
  const { width } = useWindowSize();
  const location = useLocation();

  const handleClickLink = (to: string) => {
    if (location.pathname === to) {
      // 같은 경로일 때 페이지 리로드
      window.location.reload();
    }
    if (width > 768) return;
    onClose();
  };

  return (
    <div
      // 사이드바가 오픈됐을때 바깥 영역 음영 처리 영역
      className={
        width > 768
          ? ``
          : `bg-black/50 ${
              open ? `w-screen` : `w-0`
            }  h-screen absolute top-0 left-0`
      }
      onClick={onClose}
    >
      <div
        // 사이드바 영역
        className={`${open ? `w-[300px]` : `w-0`} ${
          width > 768 ? "relative" : `absolute top-0 left-0`
        } h-screen duration-200 overflow-hidden bg-zinc-100 dark:bg-zinc-900 z-SIDE_NAV_LEVEL`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex px-3 flex-col shrink-0 w-[300px]">
          {/* 메뉴 아이콘 */}
          <div className="h-[56px] flex justify-between">
            <div className={`md:${!open ? "hidden" : "flex"} flex-center`}>
              <button onClick={onClose}>
                <MenuIcon className="w-7 h-7 dark:text-zinc-200 text-zinc-700" />
              </button>
            </div>
          </div>
          {/* 홈 */}
          <div className="pb-5">
            <Link
              to={"/"}
              className="flex gap-2 p-2 bg-transparent hover:bg-zinc-400/10 dark:hover:bg-zinc-200/10 rounded-lg"
              onClick={() => handleClickLink("/")}
            >
              <div className="w-6 h-6 p-1 bg-white rounded-full dark:bg-black dark:text-white border border-zinc-500 ">
                <GPTLogoIcon className="" />
              </div>
              <span className="dark:text-zinc-200">ChatYunGPT</span>
            </Link>
          </div>
          {/* 채팅 목록 */}
          <div className="">
            <div className="pb-5">
              <h3 className="p-2 dark:text-white font-semibold">어제</h3>
              <Link
                to={"/contect"}
                className="flex p-2 bg-transparent hover:bg-zinc-400/10 dark:hover:bg-zinc-200/10 rounded-lg dark:text-white"
                onClick={() => handleClickLink("/contect")}
              >
                개발자에게 연락하는 방법
              </Link>
            </div>

            <div className="pb-5">
              <h3 className="p-2 dark:text-white font-semibold">3주 전</h3>
              <Link
                to={"/before"}
                className="flex p-2 bg-transparent hover:bg-zinc-400/10 dark:hover:bg-zinc-200/10 rounded-lg dark:text-white"
                onClick={() => handleClickLink("/before")}
              >
                취업 전 작업물
              </Link>
            </div>

            <div className="pb-5">
              <h3 className="p-2 dark:text-white font-semibold">2개월 전</h3>
              <Link
                to={"/explanation"}
                className="flex p-2 bg-transparent hover:bg-zinc-400/10 dark:hover:bg-zinc-200/10 rounded-lg dark:text-white"
                onClick={() => handleClickLink("/explanation")}
              >
                글자 입력 문제
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
