interface Prop {
  className?: string;
}
export const WorkIcon = ({ className = "w-6 h-6 text-black" }: Prop) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="WorkOutlineRoundedIcon"
    >
      <path d="M14 6V4h-4v2zM4 9v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1m16-3c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2z"></path>
    </svg>
  );
};
