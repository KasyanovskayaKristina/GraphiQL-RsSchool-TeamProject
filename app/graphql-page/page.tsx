'use client';

import PrivateRoute from '../services/PrivateRoute';
import EndpointChangeForm from '../components/EndpointChangeForm';
import QueryEditor from '../components/QueryEditor';
import Toolbar from '../components/Toolbar';
import { Suspense, lazy } from 'react';
import { useAppContext } from '../context/AppContext';
import { useAppSelector } from '@/redux/hooks';
import Loader from '../components/Loader';
import EditorToolsTabs from '../components/EditorToolsTabs';
import ResponseEditor from '../components/ResponseEditor';
import VariablesEditor from '../components/VariablesEditor';
import HeadersEditor from '../components/HeadersEditor';
import { EditorTabMode } from '../types/types';

const Documentation = lazy(() => import('../components/Documentation'));

export default function GraphQLPage() {
  const { isOpen: isDocumentationOpen } = useAppSelector(
    (state) => state.schema
  );

  const { isQueryPayloadTabOpen, activeQueryPayloadTab } = useAppSelector(
    (state) => state.graphiql
  );

  const { isDataLoaded } = useAppContext();

  return (
    <>
      {isDataLoaded ? (
        <PrivateRoute condition={!localStorage.getItem('isAuthenticated')}>
          <EndpointChangeForm />
          <div
            className={
              isDocumentationOpen
                ? 'my-6 flex h-auto flex-1 justify-center gap-4 rounded-lg bg-slate-200 p-2 mobile:flex-col tablet:flex-col laptop:flex-col'
                : 'my-6 flex h-auto flex-1 justify-center gap-4 rounded-lg bg-slate-200 p-2 mobile:flex-col tablet:flex-col'
            }
          >
            <div
              className={
                isDocumentationOpen
                  ? 'flex h-[550px] max-h-[550px] min-h-[550px] flex-[4_0_0%] gap-2 mobile:h-auto mobile:max-h-none mobile:min-h-min mobile:flex-col tablet:h-auto tablet:max-h-none tablet:min-h-min tablet:flex-col'
                  : 'flex h-[550px] max-h-[550px] min-h-[550px] flex-1 gap-2 mobile:h-auto mobile:max-h-none mobile:min-h-min mobile:flex-col tablet:h-auto tablet:max-h-none tablet:min-h-min tablet:flex-col'
              }
            >
              <Toolbar />
              {isDocumentationOpen && (
                <Suspense fallback={<Loader />}>
                  <Documentation />
                </Suspense>
              )}
              <div
                className={
                  isDocumentationOpen
                    ? 'flex flex-[2_0_0%] flex-col shadow-xl mobile:h-[550px] mobile:max-h-[550px] mobile:min-h-[550px] tablet:h-[550px] tablet:max-h-[550px] tablet:min-h-[550px]'
                    : 'flex flex-1 flex-col shadow-xl mobile:h-[550px] mobile:max-h-[550px] mobile:min-h-[550px] tablet:h-[550px] tablet:max-h-[550px] tablet:min-h-[550px]'
                }
              >
                <QueryEditor />
                <EditorToolsTabs />
                {isQueryPayloadTabOpen && (
                  <div className='flex flex-1 flex-col'>
                    {activeQueryPayloadTab === EditorTabMode.Variables && (
                      <VariablesEditor />
                    )}
                    {activeQueryPayloadTab === EditorTabMode.Headers && (
                      <HeadersEditor />
                    )}
                  </div>
                )}
              </div>
            </div>
            <ResponseEditor />
          </div>
        </PrivateRoute>
      ) : (
        <Loader />
      )}
    </>
  );
}
