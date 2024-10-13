import { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
  onClick: () => void;
}

export const PromptCard = ({ title, icon, onClick }: Props) => {
  return (
    <button
      className="w-[160px] h-[104px] border border-zinc-400 rounded-xl p-4 flex flex-col gap-2  hover:bg-zinc-100 dark:hover:bg-zinc-600"
      onClick={onClick}
    >
      {/* 아이콘 */}
      <div>{icon}</div>
      {/* 내용 */}
      <div className="text-zinc-500 dark:text-zinc-300">{title}</div>
    </button>
  );
};
