import { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Question } from "../components/features/Question";
import { Answer } from "../components/features/Answer";
import { chatData } from "../utils/contents";
import { ChatPresentation } from "../components/features/ChatPresentation";

export const Explanation = () => {
  const [message, setMessage] = useState("");
  return (
    <PageLayout>
      <ChatPresentation message={message} setMessage={setMessage}>
        <div className="dark:text-zinc-200">
          <Question question={chatData.explanation.question} />
          <Answer answer={chatData.explanation.answer} />
        </div>
      </ChatPresentation>
    </PageLayout>
  );
};
