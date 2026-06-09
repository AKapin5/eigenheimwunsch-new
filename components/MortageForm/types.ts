export type MortgageData = {
  name: string;
  email: string;
  phone: string;

  source: string;

  hasKids: boolean;
  kidsCount: number;

  propertyPrice: number;
  income: number;
  duration: number;

  message: string;
};

export interface IpersonInfo {
  name: string;
  surname: string;
  gender: string;
  employment: string;
  birthday: Date | undefined;
  phone: string;
  email: string;
  strasse: string;
  postalCode: string;
  ort: string;
  additionalInfo: string;
}

export type Action =
  | {
      type: "SET_FIELD";
      field: keyof MortgageData;
      value: any;
    }
  | {
      type: "NEXT_STEP";
    }
  | {
      type: "PREV_STEP";
    }
  | {
      type: "SET_STEP";
      payload: number;
    }
  | {
      type: "SET_ERROR";
      payload: string | null;
    }
  | {
      type: "RESET";
    };