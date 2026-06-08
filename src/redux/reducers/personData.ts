import { IpersonInfo } from './../../interfaces';
import { IpersonFamilyInfo } from './../../interfaces';

interface IinitialStateProps {
  personInfo: IpersonInfo,
  personFamilyInfo: IpersonFamilyInfo,
  personSalary: number,
  personSource: string,
}

const initialState: IinitialStateProps = {
  personInfo: {
    name: '',
    surname: '',
    gender: '',
    employment: '',
    birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
    phone: '',
    email: '',
    strasse: '',
    postalCode: '',
    ort: '',
    additionalInfo: ''
  },
  personFamilyInfo: {
    marriaged: false,
    kids: 0,
  },
  personSalary: 0,
  personSource: 'google',
}

interface IsetPersonInfoAction {
  type: 'SET_PERSON_DATA' | 'SET_PERSON_FAMILY_DATA' | 'SET_PERSON_SALARY' | 'SET_PERSON_SOURCE',
  payload: IpersonInfo | IpersonFamilyInfo | number | string
}

export const personDateReducer = (state = initialState, action: IsetPersonInfoAction) => {
  switch(action.type) {
    case 'SET_PERSON_DATA': {
      return {
        ...state,
        personInfo: action.payload  
      }
    }

    case 'SET_PERSON_FAMILY_DATA': {
      return {
        ...state,
        personFamilyInfo: action.payload
      }
    }

    case 'SET_PERSON_SALARY': {
      return {
        ...state,
        personSalary: action.payload
      }
    }

    case 'SET_PERSON_SOURCE': {
      return {
        ...state,
        personSource: action.payload
      }
    }

    default: {
      return state;
    }
  }
}