import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import App from './App';
import { getSign, getCurrency} from './app/util/currency';

import { fetchCurrency } from './app/api';
jest.mock('axios');

test('renders app loading', () => {
  const { getByText } = render(
      <App />
  );
  expect(getByText('Loading...')).toBeInTheDocument();
});

test('test getSign EUR', () => {
  expect(getSign('EUR')).toBe('€');
});

test('test getCurrency', () => {
  expect(getCurrency({money: '100', rate: 1})).toBe('100.00');
  expect(getCurrency({money: '100', rate: 0.5})).toBe('50.00');
})

describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const resp = {
        data: {
          rates: {
            "EUR": 0.839873,
            "GBP": 0.726601,
            "USD": 1
          }
        }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(resp));
    await expect(fetchCurrency({base: 'USD',symbols:'EUR,GBP,USD'})).resolves.toEqual(resp.data.rates);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    await expect(fetchCurrency({})).rejects.toThrow(errorMessage);
  });
});

