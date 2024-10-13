import { CodeIcon } from "../../assets/icons/CodeIcon";
import { GPTLogoIcon } from "../../assets/icons/GPTLogoIcon";
import { ProjectIcon } from "../../assets/icons/ProjectIcon";
import { SkillIcon } from "../../assets/icons/SkillIcon";
import { WorkIcon } from "../../assets/icons/WorkIcon";
import { PromptCard } from "./PromptCard";

interface Props {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export const InitialScreen = ({ setKeyword }: Props) => {
  return (
    <div className="w-full h-full flex-center flex-col gap-10">
      <div className="w-12 h-12 ">
        <GPTLogoIcon className="dark:text-slate-50" />
      </div>
      {/* 질문 카드 */}
      <div className="flex-center flex-wrap gap-4">
        <div className="flex gap-4">
          <PromptCard
            title="기술 스택 알려줘"
            icon={
              <SkillIcon className="w-6 h-6 dark:text-yellow-300 text-yellow-400" />
            }
            onClick={() => setKeyword("skill")}
          />
          <PromptCard
            title="경력 알려줘"
            icon={
              <WorkIcon className="w-6 h-6 dark:text-emerald-200 text-emerald-300" />
            }
            onClick={() => setKeyword("career")}
          />
        </div>
        <div className="flex gap-4">
          <PromptCard
            title="참여 프로젝트"
            icon={
              <ProjectIcon className="w-6 h-6 dark:text-cyan-200 text-cyan-300" />
            }
            onClick={() => setKeyword("project")}
          />
          <PromptCard
            title="코드 샘플 보여줘"
            icon={
              <CodeIcon className="w-6 h-6 dark:text-purple-200 text-purple-300" />
            }
            onClick={() => setKeyword("code")}
          />
        </div>
      </div>
    </div>
  );
};
