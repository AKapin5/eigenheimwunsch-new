export const setFinalMortage = (payload: number) => ({
  type: 'SET_FINAL_MORTAGE',
  payload,
});

export const setMortageDetails = (payload: {}) => ({
  type: 'SET_MORTAGE_DETAILS',
  payload,
});

export const setMortageDuration = (payload: number) => ({
  type: 'SET_MORTAGE_DURATION',
  payload,
});

export const setPropertyValue = (payload: number) => ({
  type: 'SET_PROPERTY_VALUE',
  payload,
});
