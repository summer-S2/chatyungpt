import { GPTLogoIcon } from "../../assets/icons/GPTLogoIcon";
interface Props {
  answer: string;
}

export const Answer = ({ answer }: Props) => {
  return (
    <div className=" flex gap-6 py-[18px] px-5">
      <div className="w-6 h-6 p-1 bg-white rounded-full dark:bg-black dark:text-white border border-zinc-500 shrink-0">
        <GPTLogoIcon className="" />
      </div>
      <div
        className="flex flex-col gap-3"
        dangerouslySetInnerHTML={{ __html: answer }}
      ></div>
    </div>
  );
};
