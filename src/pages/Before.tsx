import { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { ChatPresentation } from "../components/features/ChatPresentation";
import { Question } from "../components/features/Question";
import { Answer } from "../components/features/Answer";
import { chatData } from "../utils/contents";

export const Before = () => {
  const [message, setMessage] = useState("");
  return (
    <PageLayout>
      <ChatPresentation message={message} setMessage={setMessage}>
        <div className="dark:text-zinc-200">
          <Question question={chatData.before.question} />
          <Answer answer={chatData.before.answer} />
        </div>
      </ChatPresentation>
    </PageLayout>
  );
};
