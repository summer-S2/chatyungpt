import { ChatInput } from "../common/ChatInput";
import { ReactNode } from "react";

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  isTyping?: React.MutableRefObject<boolean>;
  children: ReactNode;
}
export const ChatPresentation = ({
  children,
  message,
  setMessage,
  isTyping,
}: Props) => {
  return (
    <div className="flex flex-col flex-1  pb-8 ">
      {/* 대화 내용 영역 */}
      <div className="px-3 flex-1 flex flex-col overflow-auto max-h-[calc(100vh-56px-84px)]">
        {children}
      </div>
      {/* 입력창 영역 */}
      <div className="px-3">
        <ChatInput
          message={message}
          setMessage={setMessage}
          isTyping={isTyping}
        />
      </div>
    </div>
  );
};
