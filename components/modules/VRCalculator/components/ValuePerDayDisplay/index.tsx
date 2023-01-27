import React from 'react';

import { formatValue } from 'react-currency-input-field';
import { currencyConfig } from '../../constants/currencyConfig';

type Props = {
  valuePerDay: number;
};

const ValuePerDayDisplay = ({ valuePerDay }: Props) => {
  return (
    <div>
      {formatValue({
        value: valuePerDay.toString(),
        intlConfig: currencyConfig,
        decimalScale: 2,
      })}
    </div>
  );
};

export default ValuePerDayDisplay;
