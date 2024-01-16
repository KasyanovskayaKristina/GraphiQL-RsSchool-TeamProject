import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RefObject } from 'react';

import logoutIcon from '../../public/logout-icon.svg';
import { LanguageType } from '../types/types';

interface IMobileMenuProps {
  homeLink: string;
  graphqlLink: string;
  logInLink: string;
  signUpLink: string;
  isAuthenticated: boolean;
  language: LanguageType;
  handleMenuClose: () => void;
  handleSignOut: () => void;
  handleLangugeChange: () => void;
  mobileMenuRef: RefObject<HTMLDialogElement>;
}

const mobileLink = 'text-black';
const mobileLinkActive = 'font-bold text-lime-600';

export default function MobileMenu({
  homeLink,
  graphqlLink,
  logInLink,
  signUpLink,
  isAuthenticated,
  language,
  handleMenuClose,
  handleSignOut,
  handleLangugeChange,
  mobileMenuRef,
}: IMobileMenuProps) {
  const location = usePathname();
  return (
    <dialog
      className='mb-0 mt-0 h-full w-screen justify-between rounded-b-xl p-10 open:flex open:animate-[appearFromAbove_0.5s_ease-in-out]'
      onClick={handleMenuClose}
      ref={mobileMenuRef}
    >
      <nav>
        <ul className='flex flex-col gap-4 text-xl'>
          <li>
            <Link
              className={location === '/' ? mobileLinkActive : mobileLink}
              href={'/'}
            >
              {homeLink}
            </Link>
          </li>
          {isAuthenticated ? (
            <li>
              <Link
                className={
                  location === '/graphql-page' ? mobileLinkActive : mobileLink
                }
                href={'/graphql-page'}
              >
                {graphqlLink}
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  className={
                    location === '/login-page' ? mobileLinkActive : mobileLink
                  }
                  href={'/login-page'}
                >
                  {logInLink}
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location === '/register-page'
                      ? mobileLinkActive
                      : mobileLink
                  }
                  href={'/register-page'}
                >
                  {signUpLink}
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div
        className='flex flex-col items-center justify-start gap-4'
        onClick={(e) => e.stopPropagation()}
        data-testid='container'
      >
        {isAuthenticated && (
          <Image
            onClick={handleSignOut}
            src={logoutIcon}
            alt='logout icon'
            height={40}
            width={40}
          />
        )}
        <div
          data-testid='language-switch-button'
          onClick={handleLangugeChange}
          className='rounded-full bg-lime-600 p-2 font-semibold text-white'
        >
          {language.toLocaleUpperCase()}
        </div>
      </div>
    </dialog>
  );
}
