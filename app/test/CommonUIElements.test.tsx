import { render, screen, fireEvent } from '@testing-library/react';
import {
  ButtonStyled,
  InputStyled,
  LabelStyled,
  LinkStyled,
  StateInputStyled,
} from '../components/CommonUIElements';
import React from 'react';

it('renders ButtonStyled with correct props', () => {
  const onClick = jest.fn();
  render(
    <ButtonStyled
      title='Test Button'
      color='bg-green-500'
      hoverColor='hover:bg-green-700'
      onClick={onClick}
    />
  );

  const button = screen.getByText('Test Button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('bg-green-500 hover:bg-green-700');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});

it('renders InputStyled with correct props', () => {
  const onChange = jest.fn();
  render(<InputStyled value='' type='text' onChange={onChange} />);

  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('type', 'text');
  fireEvent.change(input, { target: { value: 'test' } });
  expect(onChange).toHaveBeenCalled();
});

it('renders LabelStyled with correct props', () => {
  render(
    <LabelStyled title='Test Label'>
      <span>Test content</span>
    </LabelStyled>
  );

  const label = screen.getByText('Test Label');
  const content = screen.getByText('Test content');
  expect(label).toBeInTheDocument();
  expect(content).toBeInTheDocument();
});

it('renders LinkStyled with correct props', () => {
  render(
    <LinkStyled
      title='Test Link'
      direction='/test'
      color='bg-blue-500'
      hoverColor='hover:bg-blue-700'
    />
  );

  const link = screen.getByText('Test Link');
  expect(link).toBeInTheDocument();
  expect(link).toHaveClass('bg-blue-500 hover:bg-blue-700');
});

it('renders StateInputStyled with correct props', () => {
  const onChange = jest.fn();
  const inputRef = { current: null };
  render(
    <StateInputStyled
      value='Test Value'
      isEditing={true}
      hasError={false}
      onChange={onChange}
      inputRef={inputRef}
    />
  );

  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue('Test Value');
  expect(input).toHaveClass('focus:border-lime-600');
  fireEvent.change(input, { target: { value: 'Updated Value' } });
  expect(onChange).toHaveBeenCalled();
});
