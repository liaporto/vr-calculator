import { calculateRemainingValuePerDay } from '@/utils/calculateRemainingValue';
import React, { useEffect, useRef, useState } from 'react';
import AmountInput from './components/AmountInput';
import ValuePerDayDisplay from './components/ValuePerDayDisplay';

import * as S from './styles';

const VRCalculator = () => {
  const [valuePerDay, setValuePerDay] = useState(0);
  const [onlyBusinessDays, setOnlyBusinessDays] = useState<boolean>();

  const amountRef = useRef<HTMLInputElement>();

  const handleAmountChange = (newValue: string | undefined) => {
    if (!newValue) return;

    const parsedValue = +newValue.replaceAll('.', '').replace(',', '.');

    setValuePerDay(
      calculateRemainingValuePerDay(parsedValue, {
        onlyBusinessDays: onlyBusinessDays,
      })
    );
  };

  const handleBusinessDaysChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (amountRef.current) {
      if (event.target.checked) {
        setOnlyBusinessDays(true);
      } else {
        setOnlyBusinessDays(false);
      }
    }
  };

  useEffect(() => {
    if (amountRef.current) {
      const currentValue = amountRef.current.value;
      const parsedValue = +currentValue
        .replace('R$', '')
        .replaceAll('.', '')
        .replace(',', '.')
        .trim();

      setValuePerDay(
        calculateRemainingValuePerDay(parsedValue, {
          onlyBusinessDays,
        })
      );
    }
  }, [onlyBusinessDays]);

  return (
    <S.Container>
      <form>
        <div>
          <label htmlFor="value-input">Quanto você tem no seu VR?</label>
          <AmountInput
            id="value-input"
            amountRef={amountRef}
            onValueChange={handleAmountChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="business-day-cdecimalScaleheckbox"
            onChange={handleBusinessDaysChange}
            defaultChecked
          />
          <label htmlFor="business-day-checkbox">
            Considerar apenas dias úteis
          </label>
        </div>
      </form>
      <ValuePerDayDisplay valuePerDay={valuePerDay} />
    </S.Container>
  );
};

export default VRCalculator;
