interface IinitialProps {
  finalMortage: number;
  tableData: {
    Zinsen: number;
    Tilgung: number;
    Annuitaet: number;
    Darlehensrest: number;
  };
  mortageDuration: number;
  propertyValue: number;
}

interface IMortageAction {
  type: 'SET_FINAL_MORTAGE' | 'SET_MORTAGE_DETAILS' | 'SET_MORTAGE_DURATION' | 'SET_PROPERTY_VALUE',
  payload: number
}

const initialState: IinitialProps = {
  finalMortage: 0,
  tableData: {
    Zinsen: 0,
    Tilgung: 0,
    Annuitaet: 0,
    Darlehensrest: 0,
  },
  mortageDuration: 0,
  propertyValue: 0
}

export const mortageInfoReducer = (state = initialState, action: IMortageAction) => {
  switch(action.type) {
    case 'SET_FINAL_MORTAGE': 
      return {
        ...state,
        finalMortage: action.payload
      }

    case 'SET_MORTAGE_DETAILS': 
      return {
        ...state,
        tableData: action.payload
      }

    case 'SET_MORTAGE_DURATION': 
      return {
        ...state,
        mortageDuration: action.payload
      }

    case 'SET_PROPERTY_VALUE': 
      return {
        ...state,
        propertyValue: action.payload
      }

    default:
      return state;
  }
}