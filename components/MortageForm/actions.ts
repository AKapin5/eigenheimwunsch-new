import type { MortgageData } from "./types";

export type Action =
  | { type: "SET_FIELD"; field: keyof MortgageData; value: any }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "SET_STEP"; payload: number }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "RESET" };