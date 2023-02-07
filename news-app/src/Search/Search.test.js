import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Search from './Search'

// Test that the search input updates on change.
// The test is mocked because the setSearch function is not defined in the test.    
// The fireEvent.change() method is used to simulate a change event on the input element.
// The expect() method is used to check that the input value is equal to the value that was passed to the fireEvent.change() method.

describe('Input value', () => {
    it('updates on change', () => {
      const setSearch = jest.fn((value) => {})
      
      const { queryByPlaceholderText } = render(<Search setSearch={setSearch}/>)
  
      const searchInput = queryByPlaceholderText('Search for news')
  
      fireEvent.change(searchInput, { target: { value: 'Google' } })
  
      expect(searchInput.value).toBe('Google')
    })
  })

  // Test that the searchByTitle function is called when the search button is clicked.
  
  