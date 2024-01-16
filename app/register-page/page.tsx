'use client';

import Link from 'next/link';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/navigation';

import { useAppContext } from '../context/AppContext';
import PrivateRoute from '../services/PrivateRoute';
import { StringsMapType } from '../types/types';
import Loader from '../components/Loader';
import {
  ButtonStyled,
  InputStyled,
  LabelStyled,
} from '../components/CommonUIElements';
import { toast } from 'react-toastify';

const strings: StringsMapType = {
  title: {
    en: 'Register',
    ru: 'Регистрация',
  },
  subtitle: {
    en: 'Already have an account?',
    ru: 'У Вас уже есть аккаунт?',
  },
  loginLink: {
    en: 'LogIn',
    ru: 'Войти',
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
    en: 'Sign Up',
    ru: 'Зарегистрироваться',
  },
};

const RegisterPage = () => {
  const { language, isDataLoaded } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();
  const isStrongPassword = (pass: string) => {
    const strongPasswordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(pass);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      setEmailError('Invalid email address');
      return;
    }

    if (!isStrongPassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters long and include at least one letter, one digit, and one special character.'
      );
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/graphql-page');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
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
              <Link className='underline' href={'login-page'}>
                {strings.loginLink[language]}
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
                {emailError && <p className='text-red-500'>{emailError}</p>}
              </LabelStyled>
              <LabelStyled title={strings.passworLabel[language]}>
                <InputStyled
                  value={password}
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && (
                  <p className='text-red-500'>{passwordError}</p>
                )}
              </LabelStyled>
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

export default RegisterPage;
