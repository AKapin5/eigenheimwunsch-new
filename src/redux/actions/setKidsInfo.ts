export const setHaveKids = (payload: boolean) => ({
  type: 'SET_HAVE_KIDS',
  payload,
});

export const setKidsMoreThree = (payload: boolean) => ({
  type: 'SET_KIDS_MORE_THREE',
  payload,
});

export const setKidsCount = (payload: number) => ({
  type: 'SET_KIDS_COUNT',
  payload,
}); 

export const resetKidsInfo = () => ({
  type: 'SET_KIDS_COUNT'
})