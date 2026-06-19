export interface IdoubleRadio {
  active: string
}

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

export interface IpersonFamilyInfo {
  marriaged: boolean,
  kids: number,
}

export interface IContactData {
  name: string,
  email: string,
  message: string,
}