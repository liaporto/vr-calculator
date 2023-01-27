import CurrencyInput from 'react-currency-input-field';
import styled from 'styled-components';

const AmountInput = styled(CurrencyInput)`
  height: 4rem;
  width: 30rem;
  padding: 1.5rem;
  font-size: 1.2rem;
  border-radius: var(--border-radius);
  border: none;
  box-shadow: 0px 1px 10px rgba(100, 100, 200, 0.05), 0px 0px 20px 10px rgba(100, 100, 200, 0.05);
`;

export { AmountInput };
