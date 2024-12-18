import { addYears, addMonths } from "date-fns";

export function calculateNextRenewalDate(date: Date, renewalPeriod: string): Date | null {
  const periodMap = {
    'Annual': () => addYears(date, 1),
    'Biennial': () => addYears(date, 2),
    '2 Years': () => addYears(date, 2),
    '5 Years': () => addYears(date, 5),
    'Permanent': () => null,
  };

  const calculator = periodMap[renewalPeriod as keyof typeof periodMap];
  return calculator ? calculator() : null;
}