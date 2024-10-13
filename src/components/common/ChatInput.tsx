import TextareaAutosize from "react-textarea-autosize";
import { ArrowUpIcon } from "../../assets/icons/ArrowUpIcon";

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  isTyping?: React.MutableRefObject<boolean>;
}
export const ChatInput = ({ message, setMessage, isTyping }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(""); // 메시지 전송 후 입력 필드 초기화
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-zinc-100 dark:bg-zinc-600 rounded-3xl py-[6px] px-2 relative"
    >
      {/* 인풋 영역 포커싱 방지 */}
      <div className="absolute w-full h-full top-0 bottom-0"></div>
      <TextareaAutosize
        value={message}
        onChange={handleChange}
        placeholder="메시지 ChatYunGPT"
        className="flex-1 bg-transparent p-2 resize-none focus:outline-none pl-3 dark:text-zinc-100"
        rows={1}
      />
      {/* 가짜 텍스트 커서 (포커싱 된것처럼 보이기) */}
      {!isTyping?.current && (
        <div className="absolute w-[2px] h-5 bg-black dark:bg-zinc-100 animate-FADE left-5"></div>
      )}
      <button
        type="submit"
        className="w-8 h-8 bg-black dark:bg-zinc-100 dark:text-zinc-600 text-zinc-100 rounded-full flex-center disabled:cursor-default disabled:opacity-30 duration-200"
        disabled={!message}
      >
        <ArrowUpIcon />
      </button>
    </form>
  );
};
