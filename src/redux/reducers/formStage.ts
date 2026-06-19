interface IinitialState {
  activeStep: number;
  numOfSteps: number;
}

interface IformStageAction {
  type: "SET_FORM_STEP";
  payload: number;
}

const initialState: IinitialState = {
  activeStep: 0,
  numOfSteps: 5,
};

export const formStageReducer = (
  state = initialState,
  action: IformStageAction
) => {
  switch (action.type) {
    case "SET_FORM_STEP": {
      return {
        ...state,
        activeStep: action.payload,
      };
    }

    default:
      return state;
  }
};
