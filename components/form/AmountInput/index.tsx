import React, { useEffect, useState } from "react";
import { StyledInput } from "./style";

type AmountInputProps = {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AmountInput = ({ value, onChange }: AmountInputProps) => {
  return (
    <StyledInput
      id={"amount-input"}
      type="number"
      min="0.01"
      step=".01"
      onChange={onChange}
      placeholder="R$"
      value={value}
    />
  );
};

export default AmountInput;
