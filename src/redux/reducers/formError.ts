interface initialStateProps {
  isError: boolean,
  text: string
}

interface setErrorAction {
  type: 'SET_FORM_ERROR',
  payload: object  
}

const initialState: initialStateProps = {
  isError: false,
  text: "Alle Felder sind erforderlich!"
}

export const formErrorReducer = (state = initialState, action: setErrorAction) => {
  switch(action.type) {
    case 'SET_FORM_ERROR': {
      const values = Object.values(action.payload);
      return {
        ...state,
        isError: values[0],
        text: values[1],
      }
    }

    default:
       return state;
  }
}