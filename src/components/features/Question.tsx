interface Props {
  question: string;
}

export const Question = ({ question }: Props) => {
  return (
    <div className="flex justify-end py-[18px] px-5">
      <p className="bg-zinc-100 dark:bg-zinc-600 min-h-[52px] px-5 py-[10px] flex items-center rounded-xl max-w-3/4 text-right">
        {question}
      </p>
    </div>
  );
};
