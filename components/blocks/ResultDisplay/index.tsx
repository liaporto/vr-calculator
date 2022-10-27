import React, { useEffect, useState } from "react";
import { formatCurrency } from "../../../utils/formatCurrency";

type ResultDisplayProps = {
  amountPerDay: number;
};

const ResultDisplay = ({ amountPerDay }: ResultDisplayProps) => {
  return (
    <div>
      <span>Você pode gastar</span>
      <span>{formatCurrency(amountPerDay)}</span>
      <span>até o final do mês</span>
    </div>
  );
};

export default ResultDisplay;
