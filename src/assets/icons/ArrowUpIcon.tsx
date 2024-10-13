interface Prop {
  className?: string;
}
export const ArrowUpIcon = ({ className = "w-6 h-6" }: Prop) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="ArrowUpwardRoundedIcon"
    >
      <path d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0s.39-1.02 0-1.41l-6.59-6.59a.996.996 0 0 0-1.41 0l-6.6 6.58c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1"></path>
    </svg>
  );
};
