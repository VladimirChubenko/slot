const initialState = {
  whatever: [
    {value: 1, id: 1},
    {value: 2, id: 2},
    {value: 3, id: 3},
    {value: 4, id: 4},
    {value: 5, id: 5},
    {value: 6, id: 6},
    {value: 7, id: 7},
    {value: 8, id: 8},
    {value: 9, id: 9}
  ],
  field: {
  first: {value: 'first', id: 1},
  second: {value: 2, id: 2},
  third: {value: 3, id: 3},
  fourth: {value: 4, id: 4}
  }
}

export default function rootReducer(state = initialState, action) {
  return state
}