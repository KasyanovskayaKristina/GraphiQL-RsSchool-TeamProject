'use client';

import { RefObject } from 'react';
import { StringsMapType } from '../types/types';
import { useAppContext } from '../context/AppContext';

import { ButtonStyled } from './CommonUIElements';

interface ISignOutConfirmationModalProps {
  modalRef: RefObject<HTMLDialogElement>;
  handleClose: () => void;
  handleSignOut: () => void;
}

const strings: StringsMapType = {
  title: {
    en: 'Are you sure you want to sign out?',
    ru: 'Вы уверены, что хотите выйти?',
  },
  subtitle: {
    en: 'Anonymous users do not have access to the GraphQL page',
    ru: 'У анонимных пользователей нет доступа к старнице GraphQL',
  },
  yesButton: {
    en: 'Yes',
    ru: 'Да',
  },
  noButton: {
    en: 'No',
    ru: 'Нет',
  },
};

export default function SignOutConfirmationModal({
  modalRef,
  handleClose,
  handleSignOut,
}: ISignOutConfirmationModalProps) {
  const { language } = useAppContext();
  return (
    <dialog
      className='h-96 flex-col justify-between gap-36 rounded-xl p-10 open:flex open:animate-[appearFromAbove_0.5s_ease-in-out] mobile:h-full mobile:w-screen mobile:justify-start'
      ref={modalRef}
      onClick={handleClose}
    >
      <div className='flex flex-col gap-5'>
        <h2 className='text-center text-2xl font-bold'>
          {strings.title[language]}
        </h2>
        <h3 className='text-center text-xl'>{strings.subtitle[language]}</h3>
      </div>
      <div className='flex justify-center gap-16'>
        <ButtonStyled
          title={strings.yesButton[language]}
          color='bg-slate-900'
          hoverColor='hover:bg-slate-500'
          onClick={handleSignOut}
        />
        <ButtonStyled
          title={strings.noButton[language]}
          color='bg-lime-600'
          hoverColor='hover:bg-lime-500'
        />
      </div>
    </dialog>
  );
}
