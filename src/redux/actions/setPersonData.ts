import { IpersonInfo } from './../../interfaces';
import { IpersonFamilyInfo } from './../../interfaces';

export const setPersonData = (payload: IpersonInfo) => ({
  type: 'SET_PERSON_DATA',
  payload,
}); 

export const setPersonFamilyData = (payload: IpersonFamilyInfo) => ({
  type: 'SET_PERSON_FAMILY_DATA',
  payload,
});

export const setPersonSalary = (payload: number) => ({
  type: 'SET_PERSON_SALARY',
  payload,
});

export const setPersonSource = (payload: string) => ({
  type: 'SET_PERSON_SOURCE',
  payload,
});