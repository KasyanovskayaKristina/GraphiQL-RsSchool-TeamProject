'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { toast } from 'react-toastify';

import { useAppContext } from '../context/AppContext';
import MobileMenu from './MobileMenu';
import SignOutConfirmationModal from './SignOutConfirmationModal';
import { ButtonStyled } from './CommonUIElements';
import logoutIcon from '../../public/logout-icon.svg';

const strings = {
  homeLink: {
    en: 'Home page',
    ru: 'Главная страница',
  },
  graphqlLink: {
    en: 'GraphQL page',
    ru: 'Страница GraphQL',
  },
  logInLink: {
    en: 'LogIn',
    ru: 'Вход',
  },
  signUpLink: {
    en: 'SignUp',
    ru: 'Регистрация',
  },
  signOutButton: {
    en: 'Sign Out',
    ru: 'Выйти',
  },
};

const Header = () => {
  const { isAuthenticated, language, setLanguage, signOut, isDataLoaded } =
    useAppContext();

  const mobileMenuRef = useRef<HTMLDialogElement>(null);
  const signOutConfirmationRef = useRef<HTMLDialogElement>(null);

  const [isSigningOut, setIsSigningOut] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY === 0;
      setIsAtTop(atTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSigningOut) {
      window.location.assign('/');
    }
  }, [isSigningOut]);

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsSigningOut(true);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleModalOpen = (modalRef: React.RefObject<HTMLDialogElement>) => {
    modalRef.current?.showModal();
  };

  const handleModalClose = (modalRef: React.RefObject<HTMLDialogElement>) => {
    modalRef.current?.close();
  };

  const location = usePathname();

  const navLink =
    'bg-slate-100 border-l border-t border-r py-2 px-4 font-normal border-gray-300';
  const navLinkActive =
    'bg-white border-l border-t border-r rounded-t py-2 px-4 font-bold relative z-10';
  const lang = 'rounded-sm bg-slate-400 px-4 py-1 text-white text-black';
  const langCurrent = 'rounded-sm bg-lime-600 px-4 py-1 text-white';

  return (
    <header
      data-testid='main-header'
      className={`top-0 z-50 flex w-full max-w-[1800px] items-end justify-around px-10 pt-4 transition-all duration-300 ease-in-out mobile:fixed mobile:justify-between tablet:fixed tablet:justify-between  ${
        isAtTop
          ? 'mobile:bg-white tablet:bg-white'
          : 'mobile:bg-slate-100 mobile:opacity-95 tablet:bg-slate-100 tablet:opacity-95'
      }`}
    >
      {isDataLoaded ? (
        <>
          <MobileMenu
            homeLink={strings.homeLink[language]}
            graphqlLink={strings.graphqlLink[language]}
            logInLink={strings.logInLink[language]}
            signUpLink={strings.signUpLink[language]}
            isAuthenticated={isAuthenticated}
            language={language}
            handleMenuClose={() => {
              handleModalClose(mobileMenuRef);
            }}
            handleSignOut={() => {
              handleModalOpen(signOutConfirmationRef);
            }}
            handleLangugeChange={() => {
              setLanguage((prevLanguage) =>
                prevLanguage === 'en' ? 'ru' : 'en'
              );
            }}
            mobileMenuRef={mobileMenuRef}
          />
          <SignOutConfirmationModal
            modalRef={signOutConfirmationRef}
            handleClose={() => {
              handleModalClose(signOutConfirmationRef);
            }}
            handleSignOut={handleSignOut}
          />
          <div
            className='hidden flex-col gap-1 pb-7 mobile:flex tablet:flex'
            onClick={() => {
              handleModalOpen(mobileMenuRef);
            }}
            data-testid='menu-button'
          >
            <div className='h-1 w-7 bg-black'></div>
            <div className='h-1 w-7 bg-black'></div>
            <div className='h-1 w-7 bg-black'></div>
          </div>
          <nav className='flex-1 items-end justify-center px-7 pb-1 mobile:hidden tablet:hidden'>
            <ul
              className={`flex w-full items-center gap-7 ${
                isAuthenticated ? 'justify-center' : 'justify-end'
              }`}
            >
              <li>
                <Link
                  className={location === '/' ? navLinkActive : navLink}
                  href={'/'}
                >
                  {strings.homeLink[language]}
                </Link>
              </li>
              {isAuthenticated ? (
                <li>
                  <Link
                    className={
                      location === '/graphql-page' ? navLinkActive : navLink
                    }
                    href={'/graphql-page'}
                  >
                    {strings.graphqlLink[language]}
                  </Link>
                </li>
              ) : (
                <div className='flex gap-7 pl-[10vw] desctop:pl-[20vw]'>
                  <li>
                    <Link
                      className={
                        location === '/login-page' ? navLinkActive : navLink
                      }
                      href={'/login-page'}
                    >
                      {strings.logInLink[language]}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        location === '/register-page' ? navLinkActive : navLink
                      }
                      href={'/register-page'}
                    >
                      {strings.signUpLink[language]}
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </nav>
          <div className='flex cursor-pointer items-center gap-10 pb-4 mobile:hidden tablet:hidden'>
            {isAuthenticated ? (
              <ButtonStyled
                title={strings.signOutButton[language]}
                color='bg-slate-900'
                hoverColor='hover:bg-slate-500'
                onClick={() => {
                  handleModalOpen(signOutConfirmationRef);
                }}
              />
            ) : null}
            <div
              className='flex'
              onClick={() =>
                setLanguage((prevLanguage) =>
                  prevLanguage === 'en' ? 'ru' : 'en'
                )
              }
            >
              <div
                className={`transition duration-300 ease-in-out ${
                  language === 'en' ? langCurrent : lang
                }`}
              >
                {language === 'en' ? 'EN' : 'АНГ'}
              </div>
              <div
                className={`transition duration-300 ease-in-out ${
                  language === 'ru' ? langCurrent : lang
                }`}
              >
                {language === 'en' ? 'RU' : 'РУС'}
              </div>
            </div>
          </div>
          <div className='hidden items-center gap-7 pb-4 mobile:flex tablet:flex'>
            {isAuthenticated && (
              <Image
                onClick={() => {
                  handleModalOpen(signOutConfirmationRef);
                }}
                src={logoutIcon}
                alt='logout icon'
                height={50}
                width={50}
              />
            )}
            <div
              onClick={() =>
                setLanguage((prevLanguage) =>
                  prevLanguage === 'en' ? 'ru' : 'en'
                )
              }
              className='rounded-full bg-lime-600 p-2 font-semibold text-white'
            >
              {language.toUpperCase()}
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
};

export default Header;
