import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './counter';

describe('Counter Component', () => {
  
  test('renders counter component with initial count and input', () => {
    render(<Counter />);
    
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('range')).toBeInTheDocument();
  });

  test('adds to count when "Add" button is clicked', () => {
    render(<Counter />);
    
    const input = screen.getByPlaceholderText('range');
    fireEvent.change(input, { target: { value: '5' } });
    
    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);
    
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('decreases count when "Decrease" button is clicked', () => {
    render(<Counter />);
    
    const input = screen.getByPlaceholderText('range');
    fireEvent.change(input, { target: { value: '5' } });
    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);
    
    const decreaseButton = screen.getByText('Decrease');
    fireEvent.click(decreaseButton);
    
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('sets count to zero when "Set To Zero" button is clicked', () => {
    render(<Counter />);
    
    const input = screen.getByPlaceholderText('range');
    fireEvent.change(input, { target: { value: '10' } });
    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);
    
    const setToZeroButton = screen.getByText('Set To Zero');
    fireEvent.click(setToZeroButton);
    
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
