interface IKidsInfo {
  haveKids: boolean;
  kidsMoreThree: boolean;
  kidsCount: number;
}

enum EKidsActionTypes {
  setHaveKids = "SET_HAVE_KIDS",
  setKidsMoreThree = "SET_KIDS_MORE_THREE",
  setKidsCount = "SET_KIDS_COUNT",
  resetKidsInfo = "RESET_KIDS_INFO",
}

type TKidsActionTypesStrings = typeof EKidsActionTypes[keyof typeof EKidsActionTypes];

interface ISetKids {
  type: TKidsActionTypesStrings;
  payload: boolean | number;
}

const initialState: IKidsInfo = {
  haveKids: false,
  kidsMoreThree: false,
  kidsCount: 0,
};

export const kidsInfoReducer = (state = initialState, action: ISetKids) => {
  switch (action.type) {
    case EKidsActionTypes.setHaveKids: {
      return {
        ...state,
        haveKids: action.payload,
      };
    }

    case EKidsActionTypes.setKidsMoreThree: {
      return {
        ...state,
        kidsMoreThree: action.payload,
      };
    }

    case EKidsActionTypes.setKidsCount: {
      return {
        ...state,
        kidsCount: action.payload,
      };
    }

    case EKidsActionTypes.resetKidsInfo: {
      return {
        haveKids: false,
        kidsMoreThree: false,
        kidsCount: 0,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
