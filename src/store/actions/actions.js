import { SET_WIN, UPD_FIELD, CHANGE_RATE, CHANGE_BALANCE, RESET_WIN, CHANGE_LAST_PRIZE } from "./actionsTypes";

export function updateField(allPossibilities) { 
  return {
    type: UPD_FIELD,
    payload: allPossibilities
  }
}

export function changeRate(num) {
  return {
    type: CHANGE_RATE,
    payload: num
  }
}

export function changeBalance(rate) {
  return {
    type: CHANGE_BALANCE,
    payload: rate
  }
}

export function changeLastPrize(prize) {
  return {
    type: CHANGE_LAST_PRIZE,
    payload: prize
  }
}

export function spin(allPossibilities, rate, balance) {
  return dispatch => {
    if (rate > balance) {
      return null
    } else {
      dispatch(resetWinnersBeforeSpin())
      dispatch(changeBalance(-rate))
      dispatch(updateField(allPossibilities))
      dispatch(checkWinners())
    }
  }
}

export function setWinner(...names) {
  return {
    type: SET_WIN,
    payload: names
  }
} 

export function resetWinners(...names) {
  return {
    type: RESET_WIN,
    payload: names
  }
} 

export function checkWinners() {
  return (dispatch, getState) => {
    const slots = getState().field.slots
    const rate = getState().panel.rate
    const key = Object.keys(slots)
    let quantity = 0

    if (slots[key[0]].value === slots[key[1]].value && slots[key[1]].value === slots[key[2]].value) {
      quantity = quantity + 1;
      console.log('FIRST line win!')
      dispatch(setWinner(slots[key[0]].name, slots[key[1]].name, slots[key[2]].name))
    }
    if (slots[key[3]].value === slots[key[4]].value && slots[key[4]].value === slots[key[5]].value) {
      console.log('SECOND line win!')
      quantity = quantity + 1;
      dispatch(setWinner(slots[key[3]].name, slots[key[4]].name, slots[key[5]].name))
    }
    if (slots[key[6]].value === slots[key[7]].value && slots[key[7]].value === slots[key[8]].value) {
      quantity = quantity + 1;
      console.log('THIRD line win!')
      dispatch(setWinner(slots[key[6]].name, slots[key[7]].name, slots[key[8]].name))
    }
    if (slots[key[0]].value === slots[key[3]].value && slots[key[3]].value === slots[key[6]].value) {
      quantity = quantity + 1;
      console.log('FIRST column win!')
      dispatch(setWinner(slots[key[0]].name, slots[key[3]].name, slots[key[6]].name))
    }
    if (slots[key[1]].value === slots[key[4]].value && slots[key[4]].value === slots[key[7]].value) {
      quantity = quantity + 1;
      console.log('SECOND column win!')
      dispatch(setWinner(slots[key[1]].name, slots[key[4]].name, slots[key[7]].name))
    }
    if (slots[key[2]].value === slots[key[5]].value && slots[key[5]].value === slots[key[8]].value) {
      quantity = quantity + 1;
      console.log('THIRD column win!')
      dispatch(setWinner(slots[key[2]].name, slots[key[5]].name, slots[key[8]].name))
    }
    if (slots[key[0]].value === slots[key[4]].value && slots[key[4]].value === slots[key[8]].value) {
      quantity = quantity + 1;
      console.log('LEFT-TO-RIGHT diagonal win!')
      dispatch(setWinner(slots[key[0]].name, slots[key[4]].name, slots[key[8]].name))
    }
    if (slots[key[2]].value === slots[key[4]].value && slots[key[4]].value === slots[key[6]].value) {
      quantity = quantity + 1;
      console.log('RIGHT-TO-LEFT diagonal win!')
      dispatch(setWinner(slots[key[2]].name, slots[key[4]].name, slots[key[6]].name))
    }
      console.log('quantity: ', quantity);

    if (quantity !== 0) {
      const prize = quantity*rate*7
      console.log('prize: ', prize);
      dispatch(changeBalance(prize))
      dispatch(changeLastPrize(prize))
    }
  }
}

export function resetWinnersBeforeSpin() {
  return (dispatch, getState) => {
    const slots = getState().field.slots
    const keys = Object.keys(slots)
    dispatch(resetWinners(...keys))
  }
}
