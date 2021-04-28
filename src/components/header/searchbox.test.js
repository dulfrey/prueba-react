import { render, screen } from '@testing-library/react'
import SearchBox from './searchbox'
import React from 'react';

/**
 * Test input tipo texto
 */
 describe("<SearchBox />", () => {
 
    test('render search input', () => {
      render(<SearchBox />);
   
      const inputEl = screen.getByTestId("search-input");
      expect(inputEl).toBeInTheDocument();
      expect(inputEl).toHaveAttribute("type", "text");
    });
   
   
   
  });