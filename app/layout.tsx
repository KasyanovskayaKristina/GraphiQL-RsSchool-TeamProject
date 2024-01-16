import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import { AppContextProvider } from './context/AppContext';
import AppStoreProvider from '../redux/provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GraphiQL App',
  description: 'Created by Source of Bugs Team',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <AppStoreProvider>
        <AppContextProvider>
          <body className={inter.className}>
            <div className='flex min-h-screen flex-col items-center rounded-3xl bg-slate-200 px-2 py-4 mobile:rounded-none mobile:bg-white tablet:rounded-none tablet:bg-white'>
              <Header />
              <main className='relative w-full max-w-[1800px] flex-1 rounded-3xl border bg-white p-10 mobile:border-0 mobile:p-1 mobile:pt-16 tablet:border-0 tablet:p-1 tablet:pt-16 '>
                {children}
              </main>
              <Footer />
            </div>
            <ToastContainer
              position='bottom-right'
              autoClose={6000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              draggable={false}
              rtl={false}
              pauseOnFocusLoss
              pauseOnHover
              theme='light'
            />
          </body>
        </AppContextProvider>
      </AppStoreProvider>
    </html>
  );
}
