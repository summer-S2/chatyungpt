interface Prop {
  className?: string;
}
export const CodeIcon = ({ className = "w-6 h-6 text-black" }: Prop) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="CodeRoundedIcon"
    >
      <path d="M8.7 15.9 4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4a.984.984 0 0 0-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0s.39-1.01 0-1.4m6.6 0 3.9-3.9-3.9-3.9a.984.984 0 0 1 0-1.4c.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0a.984.984 0 0 1 0-1.4"></path>
    </svg>
  );
};
