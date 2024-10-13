import { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { ChatPresentation } from "../components/features/ChatPresentation";
import { Question } from "../components/features/Question";
import { Answer } from "../components/features/Answer";
import { chatData } from "../utils/contents";

export const Contect = () => {
  const [message, setMessage] = useState("");
  return (
    <PageLayout>
      <ChatPresentation message={message} setMessage={setMessage}>
        <div className="dark:text-zinc-200">
          <Question question={chatData.contect.question} />
          <Answer answer={chatData.contect.answer} />
        </div>
      </ChatPresentation>
    </PageLayout>
  );
};
