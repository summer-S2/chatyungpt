import { memo } from "react";
import { PersonIcon } from "../../assets/icons/PersonIcon";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import { Dropdown, MenuProps } from "antd";
import { useDarkMode } from "../../atoms/darkMode/useDarkMode";
import { LightModeIcon } from "../../assets/icons/LightModeIcon";
import { DarkModeIcon } from "../../assets/icons/DarkModeIcon";

interface Props {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = memo(({ openSidebar, setOpenSidebar }: Props) => {
  const { toggleDarkMode, darkMode } = useDarkMode();

  // console.log(openSidebar);

  // 유저 아이콘 클릭 드롭다운 메뉴
  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 hover:bg-zinc-200 rounded-sm flex gap-2 items-center"
        >
          {darkMode.isDark ? (
            <LightModeIcon className="w-5 h-5 text-zinc-700" />
          ) : (
            <DarkModeIcon className="w-5 h-5 text-zinc-700" />
          )}
          {`${darkMode.isDark ? "라이트 모드로 변경" : "다크 모드로 변경"}`}
        </button>
      ),
    },
  ];

  return (
    <header className="h-[56px] flex justify-between p-3">
      {/* 메뉴 아이콘 */}
      <div className={`${openSidebar ? "md:hidden" : "md:flex"} flex-center`}>
        <button onClick={() => setOpenSidebar(!openSidebar)}>
          <MenuIcon className="w-7 h-7 dark:text-zinc-200 text-zinc-700" />
        </button>
      </div>

      {/* 로고 */}
      <div className="dark:text-zinc-200 text-zinc-700 text-lg font-bold">
        ChatYunGPT 4o
      </div>

      {/* 유저 아이콘 */}
      <div>
        <Dropdown
          menu={{ items: menuItems }}
          placement="bottomRight"
          trigger={["click"]}
        >
          <button className="rounded-full w-8 h-8 bg-indigo-400 flex items-center justify-center">
            <PersonIcon className="w-7 h-7 text-white dark:text-zinc-200" />
          </button>
        </Dropdown>
      </div>
    </header>
  );
});
