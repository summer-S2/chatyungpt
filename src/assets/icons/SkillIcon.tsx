interface Prop {
  className?: string;
}
export const SkillIcon = ({ className = "w-6 h-6 text-black" }: Prop) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="LaptopMacRoundedIcon"
    >
      <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM5 5h14c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1m7 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"></path>
    </svg>
  );
};
