type LanguageType = 'en' | 'ru';

type TranslatableStringType = {
  [key in LanguageType]: string;
};

type StringsMapType = {
  [key: string]: TranslatableStringType;
};

interface ITeammateCardProps {
  name: string;
  avatar: string;
  position: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

export type { LanguageType, StringsMapType, ITeammateCardProps };

export enum CodeEditorMode {
  Editor,
  Viewer,
}

export enum EditorTabMode {
  Variables,
  Headers,
}
