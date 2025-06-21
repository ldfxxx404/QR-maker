import type { HTMLAttributes } from "react";

interface ThemeSwitcherProps extends HTMLAttributes<HTMLButtonElement> {
  isDark?: boolean;
  onToggle: () => void;
}

export const Switcher = ({
  isDark,
  onToggle,
  ...props
}: ThemeSwitcherProps) => {
  return (
    <button onClick={onToggle} {...props} style={{ fontSize: "35px" }}>
      {isDark ? "🌙" : "☀️"}
    </button>
  );
};
