'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

import { useAppContext } from '../context/AppContext';
import { StringsMapType } from '../types/types';
import PrivateRoute from '../services/PrivateRoute';
import {
  ButtonStyled,
  InputStyled,
  LabelStyled,
} from '../components/CommonUIElements';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';

const strings: StringsMapType = {
  title: {
    en: 'Login',
    ru: 'Войти',
  },
  subtitle: {
    en: 'Dont have an account?',
    ru: 'У Вас нет аккаунта?',
  },
  signinLink: {
    en: 'Sign Up',
    ru: 'Зарегистрироваться',
  },
  emailLabel: {
    en: 'Email Address',
    ru: 'Адрес электронной почты',
  },
  passworLabel: {
    en: 'Password',
    ru: 'Пароль',
  },
  signUpButton: {
    en: 'Log In',
    ru: 'Войти',
  },
};

const LoginPage = () => {
  const { language, isDataLoaded } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/graphql-page');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        toast.error(error.message);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  return (
    <>
      {isDataLoaded ? (
        <PrivateRoute condition={!!localStorage.getItem('isAuthenticated')}>
          <div className='flex flex-col items-center gap-4 p-10 mobile:p-0 tablet:p-0'>
            <div className='py-2 text-2xl font-bold'>
              {strings.title[language]}
            </div>
            <div className='flex items-center gap-3 py-2 mobile:p-0 tablet:flex-col'>
              {strings.subtitle[language]}
              <Link className='underline' href={'register-page'}>
                {strings.signinLink[language]}
              </Link>
            </div>
            <form
              className='flex w-11/12 flex-col gap-4'
              onSubmit={handleSubmit}
            >
              <LabelStyled title={strings.emailLabel[language]}>
                <InputStyled
                  value={email}
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </LabelStyled>
              <LabelStyled title={strings.passworLabel[language]}>
                <InputStyled
                  value={password}
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </LabelStyled>
              {error && <div className='text-red-500'>{error}</div>}
              <div className='flex flex-col items-center pt-3'>
                <ButtonStyled
                  title={strings.signUpButton[language]}
                  color='bg-lime-600'
                  hoverColor='hover:bg-lime-500'
                />
              </div>
            </form>
          </div>
        </PrivateRoute>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default LoginPage;
