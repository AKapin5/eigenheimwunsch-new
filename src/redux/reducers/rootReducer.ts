import { combineReducers } from "redux";
import { formErrorReducer } from "./formError";
import { kidsInfoReducer } from "./kidsInfo";
import { personDateReducer } from "./personData";
import { mortageInfoReducer } from "./mortageInfo";
import { formStageReducer } from './formStage';

export const rootReducer = combineReducers({
  formErrorReducer,
  kidsInfoReducer,
  personDateReducer,
  mortageInfoReducer,
  formStageReducer
});
