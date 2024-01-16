'use client';

import { StringsMapType } from '../types/types';
import { FormEvent, useRef, useEffect } from 'react';
import {
  StateInputStyled,
  LabelStyled,
  ButtonStyled,
} from './CommonUIElements';
import { useAppContext } from '../context/AppContext';
import { useGetSchemaMutation } from '@/redux/services/schemaApi';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import schemaSlice from '@/redux/features/graphiql/schemaSlice';
import graphiqlSlice from '@/redux/features/graphiql/graphiqlSlice';

const strings: StringsMapType = {
  label: {
    en: 'Enter the GraphQL endpoint',
    ru: 'Введите адрес GraphQL сервера',
  },
  buttonTitleSave: {
    en: 'Connect',
    ru: 'Подключиться',
  },
  buttonTitleChange: {
    en: 'Change',
    ru: 'Изменить',
  },
};

const EndpointChangeForm = () => {
  const { language } = useAppContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [getSchema] = useGetSchemaMutation();
  const { endpoint } = useAppSelector((state) => state.graphiql);
  const { isEndpointEdited, hasError } = useAppSelector(
    (state) => state.schema
  );
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isEndpointEdited) {
      getSchema(endpoint);
    } else {
      dispatch(schemaSlice.actions.toggleIsEndpointEdited(true));
    }
  };

  useEffect(() => {
    if (isEndpointEdited) {
      inputRef.current?.focus();
    }
  }, [isEndpointEdited]);

  useEffect(() => {
    if (hasError) {
      inputRef.current?.focus();
    }
  }, [hasError]);

  return (
    <>
      <div className='flex justify-center'>
        <form
          className='flex w-11/12 max-w-4xl items-end gap-4 mobile:flex-col mobile:items-stretch tablet:flex-col tablet:items-stretch'
          onSubmit={handleSubmit}
          data-testid='endpoint-change-form'
        >
          <LabelStyled title={strings.label[language]}>
            <StateInputStyled
              value={endpoint}
              isEditing={isEndpointEdited}
              hasError={hasError}
              inputRef={inputRef}
              onChange={(event) =>
                dispatch(graphiqlSlice.actions.setEndpoint(event.target.value))
              }
            />
          </LabelStyled>
          <div className='w-fit mobile:self-end tablet:self-end' data-testid='endpoint-button'>
            <ButtonStyled
              title={
                isEndpointEdited
                  ? strings.buttonTitleSave[language]
                  : strings.buttonTitleChange[language]
              }
              color='bg-lime-600'
              hoverColor='hover:bg-lime-500'
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EndpointChangeForm;
