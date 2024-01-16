import Link from 'next/link';
import { HTMLInputTypeAttribute, ReactNode, RefObject } from 'react';

type HoverColorType = `hover:${string}`;
interface IStyledLinkProps {
  title: string;
  direction: string;
  color: string;
  hoverColor: HoverColorType;
}

interface IStyledButtonProps {
  title: string;
  color: string;
  hoverColor: HoverColorType;
  onClick?: () => void;
}

interface IStyledLabelProps {
  title: string;
  children: ReactNode;
}

interface IStyledInputProps {
  value: string | number | readonly string[] | undefined;
  type: HTMLInputTypeAttribute | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface StateInputStyledProps {
  value: string;
  isEditing: boolean;
  hasError: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
}

function LinkStyled({ title, direction, color, hoverColor }: IStyledLinkProps) {
  return (
    <Link
      href={direction}
      className={`flex flex-col items-center rounded-xl px-4 py-1 text-white ${color} ${hoverColor}`}
    >
      {title}
    </Link>
  );
}

function ButtonStyled({
  title,
  color,
  hoverColor,
  onClick,
}: IStyledButtonProps) {
  return (
    <button
      className={`flex flex-col items-center rounded-xl px-4 py-1 text-white ${color} ${hoverColor}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

function InputStyled({ value, type, onChange }: IStyledInputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      className='rounded-full border-2 p-3 focus:border-lime-600 focus:outline-none'
    />
  );
}

function LabelStyled({ title, children }: IStyledLabelProps) {
  return (
    <label className='flex flex-1 flex-col gap-2 font-medium'>
      <h2 className='px-4'>{title}</h2>
      {children}
    </label>
  );
}

function StateInputStyled({
  value,
  isEditing,
  hasError,
  onChange,
  inputRef,
}: StateInputStyledProps) {
  const className =
    'relative w-full rounded-full border-2 p-3 focus:border-lime-600 focus:outline-none disabled:pointer-events-none';

  return (
    <input
      className={
        hasError
          ? className + ' border-rose-600 focus:border-rose-600'
          : className
      }
      value={value}
      onChange={onChange}
      ref={inputRef}
      type='text'
      disabled={!isEditing}
      data-testid='endpoint-input'
    />
  );
}

export { LinkStyled, ButtonStyled, InputStyled, LabelStyled, StateInputStyled };
