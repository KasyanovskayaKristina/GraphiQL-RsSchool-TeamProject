'use client';

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  onAuthStateChanged,
  User as FirebaseUser,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase';
import { FirebaseError } from 'firebase/app';
import { LanguageType } from '../types/types';
import { toast } from 'react-toastify';

export interface AppContextProps {
  user: FirebaseUser | null;
  isAuthenticated: boolean;
  signOut: () => Promise<void>;
  language: LanguageType;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
  isDataLoaded: boolean;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<AppProviderProps> = ({
  children,
}) => {
  const localstorageLanguageRef = useRef<LanguageType>('en');
  const [isDataLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadLanguageFromStorage = async () => {
      const storedLanguage = localStorage.getItem('language') as LanguageType;
      const storedIsAuthenticated =
        localStorage.getItem('isAuthenticated') === 'true';

      localstorageLanguageRef.current = storedLanguage || 'en';
      setLanguage(localstorageLanguageRef.current);
      setIsAuthenticated(storedIsAuthenticated);
      setIsLoaded(true);
    };

    loadLanguageFromStorage();
  }, []);

  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [language, setLanguage] = useState<LanguageType>('en');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthenticated(!!user);
      if (user) {
        localStorage.setItem('isAuthenticated', String(!!user));
      }
    });
    return () => unsubscribe();
  }, []);

  const contextValue: AppContextProps = {
    user,
    isAuthenticated,
    signOut: async () => {
      try {
        await signOut(auth);
        localStorage.removeItem('isAuthenticated');
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          toast.error(error.message);
        }
      }
    },
    language,
    setLanguage,
    isDataLoaded,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('Error  AuthProvider');
  }
  return context;
};
