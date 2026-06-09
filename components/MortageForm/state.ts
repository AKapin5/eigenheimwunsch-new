export type MortgageState = {
  step: number;

  personData: {
    name: string;
    email: string;
  };

  kidsInfo: {
    hasKids: boolean;
    count: number;
  };

  mortgage: {
    amount: number;
    income: number;
    duration: number;
  };

  errors: string | null;
};