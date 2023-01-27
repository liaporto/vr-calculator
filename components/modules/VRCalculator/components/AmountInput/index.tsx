import React from 'react';
import { CurrencyInputProps } from 'react-currency-input-field';
import { currencyConfig } from '../../constants/currencyConfig';

import * as S from './styles';

type AmountInputProps = CurrencyInputProps;

const AmountInput = (props: AmountInputProps) => {
  return (
    <S.AmountInput
      name="value-input"
      placeholder="Insira quanto você ainda tem no seu VR"
      defaultValue={0}
      decimalsLimit={2}
      decimalScale={2}
      intlConfig={currencyConfig}
      step={1}
      onValueChange={props.onValueChange}
      {...props}
      ref={props.amountRef}
    />
  );
};

export default AmountInput;
