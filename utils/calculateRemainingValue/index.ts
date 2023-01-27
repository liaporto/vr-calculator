import {
  endOfMonth,
  differenceInCalendarDays,
  differenceInBusinessDays,
} from 'date-fns';

type Options = {
  onlyBusinessDays?: boolean;
};

export const calculateRemainingValuePerDay = (newValue:number, options:Options):number => {
  const today = new Date(Date.now());
  const finalDayOfMonth = endOfMonth(today);

  
  const remainingDays = options.onlyBusinessDays
  ? differenceInBusinessDays(finalDayOfMonth, today)
  : differenceInCalendarDays(finalDayOfMonth, today);
  
  console.log(remainingDays)

  return newValue / remainingDays;
};
