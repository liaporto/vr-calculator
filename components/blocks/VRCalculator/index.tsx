"use client";

import React, { useEffect, useState } from "react";
import { formatCurrency } from "../../../utils/formatCurrency";
import AmountInput from "../../form/AmountInput";
import Form from "../../form/Form";
import FormControl from "../../form/FormControl";
import ResultDisplay from "../ResultDisplay";

const calculateAmountPerDay = (amount: number): number => {
  //logic to calculate weekdays and holidays
  return amount;
};

const VRCalculator = () => {
  const [inputValue, setInputValue] = useState<string>("R$ 0,00");
  const [originalAmount, setOriginalAmount] = useState<number>(0);
  const [amountPerDay, setAmountPerDay] = useState<number>();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = +e?.target.value;
    const parsedValue = formatCurrency(newValue);
    setOriginalAmount((prevValue) =>
      prevValue !== newValue ? newValue : prevValue
    );
    setInputValue(parsedValue);
  };

  useEffect(() => {
    // should i implement debounce here?
    setAmountPerDay(calculateAmountPerDay(originalAmount));
  }, [originalAmount]);

  return (
    <div>
      <Form>
        <FormControl>
          <label htmlFor="amount-input">
            Insira o quanto você ainda tem no seu VR
          </label>
          <AmountInput onChange={handleOnChange} value={inputValue} />
        </FormControl>
      </Form>
      <ResultDisplay amountPerDay={amountPerDay || 0} />
    </div>
  );
};

export default VRCalculator;
