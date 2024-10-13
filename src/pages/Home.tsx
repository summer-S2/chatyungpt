import { useEffect, useRef, useState } from "react";
import { ChatPresentation } from "../components/features/ChatPresentation";
import { PageLayout } from "../components/layout/PageLayout";
import { chatData } from "../utils/contents";
import { InitialScreen } from "../components/features/InitialScreen";
import { Answer } from "../components/features/Answer";
import { Question } from "../components/features/Question";
import { SkillIcon } from "../assets/icons/SkillIcon";
import { WorkIcon } from "../assets/icons/WorkIcon";
import { ProjectIcon } from "../assets/icons/ProjectIcon";
import { CodeIcon } from "../assets/icons/CodeIcon";

// HTML 문자열을 한글자씩 추가하는 함수
const typeHtmlContent = (htmlString: string, index: number) => {
  let currentHtml = "";
  let tagOpen = false;
  let tagContent = ""; // 태그 내용을 담을 변수
  let realIndex = 0; // 실제로 텍스트만을 기준으로 한 인덱스

  for (let i = 0; i < htmlString.length; i++) {
    const char = htmlString[i];

    if (char === "<") {
      tagOpen = true;
      tagContent += char; // 태그가 열리면 태그 내용을 따로 저장
      continue;
    }

    if (tagOpen) {
      tagContent += char; // 태그 내부 내용을 처리
      if (char === ">") {
        tagOpen = false;
        currentHtml += tagContent; // 태그가 닫히면 전체 태그를 currentHtml에 추가
        tagContent = ""; // 태그 내용 초기화
      }
      continue; // 태그가 닫히기 전까지는 텍스트 추가하지 않음
    }

    // 태그 외부의 텍스트만 인덱스로 처리
    if (!tagOpen) {
      realIndex += 1; // 텍스트만 기준으로 인덱스 증가
      currentHtml += char;
    }

    // 지정한 인덱스만큼의 텍스트를 추가했으면 종료
    if (realIndex >= index) break;
  }

  return currentHtml;
};

export const Home = () => {
  const isTyping = useRef(false);
  const [message, setMessage] = useState("");
  const [keyword, setKeyword] = useState("");
  const [chatMessages, setChatMessages] = useState<
    { sender: string; text: string }[]
  >([]);

  const chatInfo = chatData[keyword];

  // 질문 타이핑 처리 함수
  const typeQuestion = () => {
    let index = 0;
    const typingInterval = setInterval(() => {
      index += 1; // 인덱스를 증가시켜 슬라이스 범위 조정
      setMessage(chatInfo.question.slice(0, index)); // 슬라이스된 문자열을 설정

      if (index >= chatInfo.question.length) {
        clearInterval(typingInterval);
        handleSendMessage();
      }
    }, 50);
  };

  // 질문 입력 후 전송 처리 함수
  const handleSendMessage = () => {
    setTimeout(() => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: chatInfo.question },
      ]);
      setMessage("");
      typeAnswer();
    }, 500);
  };

  // 답변 타이핑 처리 함수 (HTML 포함)
  const typeAnswer = () => {
    let answerIndex = 0;
    const answerTypingInterval = setInterval(() => {
      answerIndex += 1; // 인덱스를 증가시켜 슬라이스 범위 조정

      setChatMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        if (
          updatedMessages.length > 0 &&
          updatedMessages[updatedMessages.length - 1].sender === "bot"
        ) {
          updatedMessages[updatedMessages.length - 1].text = typeHtmlContent(
            chatInfo.answer,
            answerIndex
          ); // 슬라이스된 HTML 문자열로 업데이트
        } else {
          updatedMessages.push({
            sender: "bot",
            text: typeHtmlContent(chatInfo.answer, answerIndex), // 슬라이스된 HTML 문자열로 추가
          });
        }
        return updatedMessages;
      });

      if (answerIndex >= chatInfo.answer.length) {
        clearInterval(answerTypingInterval);
        isTyping.current = false;
      }
    }, 10);
  };

  useEffect(() => {
    if (keyword && chatData[keyword] && !isTyping.current) {
      isTyping.current = true;

      // 질문 타이핑 시작
      typeQuestion();
    }
  }, [keyword]);

  return (
    <PageLayout>
      <ChatPresentation
        isTyping={isTyping}
        message={message}
        setMessage={setMessage}
      >
        {chatMessages.length === 0 && <InitialScreen setKeyword={setKeyword} />}
        <div className="dark:text-zinc-200">
          {chatMessages.map((message, index) =>
            message.sender === "bot" ? (
              // 답변 (HTML 파싱)
              <Answer key={index + message.sender} answer={message.text} />
            ) : (
              // 질문
              <Question key={index + message.sender} question={message.text} />
            )
          )}
          {chatMessages.length > 0 && !isTyping.current && (
            <div className="flex flex-col gap-2 py-[18px] px-5 pl-[74px]">
              {keyword !== "skill" && (
                <button
                  className=" flex gap-2 p-2 bg-transparent hover:bg-zinc-400/10 dark:hover:bg-zinc-200/10 rounded-lg"
                  onClick={() => setKeyword("skill")}
                >
                  <SkillIcon className="w-6 h-6 dark:text-yellow-300 text-yellow-400" />
                  기술 스택 알려줘
                </button>
              )}
              {keyword !== "career" && (
                <button
                  className=" flex gap-2 p-2 bg-transparent hover:bg-zinc-400/10 dark:hover:bg-zinc-200/10 rounded-lg"
                  onClick={() => setKeyword("career")}
                >
                  <WorkIcon className="w-6 h-6 dark:text-emerald-200 text-emerald-300" />
                  경력 알려줘
                </button>
              )}
              {keyword !== "project" && (
                <button
                  className=" flex gap-2 p-2 bg-transparent hover:bg-zinc-400/10 dark:hover:bg-zinc-200/10 rounded-lg"
                  onClick={() => setKeyword("project")}
                >
                  <ProjectIcon className="w-6 h-6 dark:text-cyan-200 text-cyan-300" />{" "}
                  참여 프로젝트
                </button>
              )}
              {keyword !== "code" && (
                <button
                  className=" flex gap-2 p-2 bg-transparent hover:bg-zinc-400/10 dark:hover:bg-zinc-200/10 rounded-lg"
                  onClick={() => setKeyword("code")}
                >
                  <CodeIcon className="w-6 h-6 dark:text-purple-200 text-purple-300" />
                  코드 샘플 보여줘
                </button>
              )}
            </div>
          )}
        </div>
      </ChatPresentation>
    </PageLayout>
  );
};
