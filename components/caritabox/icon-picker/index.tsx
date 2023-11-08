"use client";

import EmojiPicker, { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

import { Popover } from "@headlessui/react";

interface IconPickerProps {
  onChange: (icon: string) => void;
  children: React.ReactNode;
}

export const IconPicker = ({ onChange, children }: IconPickerProps) => {
  const { resolvedTheme } = useTheme();
  const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap;

  const themeMap = {
    dark: Theme.DARK,
    light: Theme.LIGHT,
  };

  const theme = themeMap[currentTheme];

  return (
    <Popover className="relative">
      <Popover.Button>{children}</Popover.Button>
      <Popover.Panel className="w-full border-none p-0 shadow-none">
        <EmojiPicker
          height={350}
          theme={theme}
          onEmojiClick={(data) => onChange(data.emoji)}
        />
      </Popover.Panel>
    </Popover>
  );
};

export default IconPicker;
