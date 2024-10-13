export const keyframes = {
  wiggle: {
    "0%, 100%": { transform: "rotate(-3deg)" },
    "50%": { transform: "rotate(3deg)" },
  },
  fade: {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0" },
  },
};

export const animation = {
  WIGGLE: "wiggle 1s ease-in-out infinite",
  FADE: "fade 1s step-end infinite",
};
