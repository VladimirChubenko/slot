import { SET_WIN, UPD_FIELD, CHANGE_RATE, CHANGE_BALANCE, RESET_WIN, CHANGE_LAST_PRIZE, START_SPIN, STOP_SPIN_FIRST_COLUMN, STOP_SPIN_SECOND_COLUMN, STOP_SPIN_THIRD_COLUMN, HIDE_MODAL_PRIZE, SHOW_MODAL_PRIZE} from "./actionsTypes";

export function spin(rate, balance) {
  return async (dispatch, getState) => {   
    const allValues =  getState().field.allPossibilities
    const slotSpins =  getState().panel.spin

    let newField = [ 
      allValues[Math.floor(Math.random() * 8)],
      allValues[Math.floor(Math.random() * 8)],
      allValues[Math.floor(Math.random() * 8)],
      allValues[Math.floor(Math.random() * 8)],
      allValues[Math.floor(Math.random() * 8)],
      allValues[Math.floor(Math.random() * 8)],
      allValues[Math.floor(Math.random() * 8)],
      allValues[Math.floor(Math.random() * 8)],
      allValues[Math.floor(Math.random() * 8)]
    ]
    
    if (rate > balance) {
      return null
    } else if (slotSpins.third) {
      setTimeout(() => dispatch(stopSpinAllColumns()), 500)
    } else {
      dispatch(resetWinners())
      dispatch(startSpin())
      dispatch(changeBalance(-rate))
      dispatch(updateField(newField))

      await stopColumn(stopSpinFirstColumn).then(result => dispatch(result))
      await stopColumn(stopSpinSecondColumn).then(result => dispatch(result))
      await stopColumn(stopSpinThirdColumn).then(result => dispatch(result))

      dispatch(checkWinners())

      console.log('eee');
      
    }
  }
}

let stopColumn = func => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(func()), 750)
  })
}

export function changeRate(num) {
  return {
    type: CHANGE_RATE,
    payload: num
  }
}

function updateField(array) { 
  return {
    type: UPD_FIELD,
    payload: array
  }
}

function changeBalance(num) {
  return {
    type: CHANGE_BALANCE,
    payload: num
  }
}

function changeLastPrize(prize) {
  return {
    type: CHANGE_LAST_PRIZE,
    payload: prize
  }
}

function setWinner(...names) {
  return {
    type: SET_WIN,
    payload: names
  }
} 

function resetWinners() {
  return {
    type: RESET_WIN
  }
} 

function startSpin() {
  return {
    type: START_SPIN
  }
} 

function stopSpinAllColumns() {
  return dispatch => {
    dispatch(stopSpinFirstColumn())
    dispatch(stopSpinSecondColumn())
    dispatch(stopSpinThirdColumn())
  }
} 

function stopSpinFirstColumn() {
  return {
    type: STOP_SPIN_FIRST_COLUMN
  }
}

function stopSpinSecondColumn() {
  return {
    type: STOP_SPIN_SECOND_COLUMN
  }
}

function stopSpinThirdColumn() {
  return {
    type: STOP_SPIN_THIRD_COLUMN
  }
}

function showModalPrize() {
  return {
    type: SHOW_MODAL_PRIZE
  }
}

export function hideModalPrize() {
  return {
    type: HIDE_MODAL_PRIZE
  }
}

function checkWinners() {
  return (dispatch, getState) => {
    const slots = getState().field.slots
    const rate = getState().panel.rate
    const key = Object.keys(slots)
    let quantity = 0

    if (slots[key[0]].value === slots[key[1]].value && slots[key[1]].value === slots[key[2]].value) {
      quantity = quantity + 1
      console.log('FIRST line win!')
      dispatch(setWinner(slots[key[0]].name, slots[key[1]].name, slots[key[2]].name))
    }
    if (slots[key[3]].value === slots[key[4]].value && slots[key[4]].value === slots[key[5]].value) {
      console.log('SECOND line win!')
      quantity = quantity + 1
      dispatch(setWinner(slots[key[3]].name, slots[key[4]].name, slots[key[5]].name))
    }
    if (slots[key[6]].value === slots[key[7]].value && slots[key[7]].value === slots[key[8]].value) {
      quantity = quantity + 1
      console.log('THIRD line win!')
      dispatch(setWinner(slots[key[6]].name, slots[key[7]].name, slots[key[8]].name))
    }
    if (slots[key[0]].value === slots[key[3]].value && slots[key[3]].value === slots[key[6]].value) {
      quantity = quantity + 1
      console.log('FIRST column win!')
      dispatch(setWinner(slots[key[0]].name, slots[key[3]].name, slots[key[6]].name))
    }
    if (slots[key[1]].value === slots[key[4]].value && slots[key[4]].value === slots[key[7]].value) {
      quantity = quantity + 1
      console.log('SECOND column win!')
      dispatch(setWinner(slots[key[1]].name, slots[key[4]].name, slots[key[7]].name))
    }
    if (slots[key[2]].value === slots[key[5]].value && slots[key[5]].value === slots[key[8]].value) {
      quantity = quantity + 1
      console.log('THIRD column win!')
      dispatch(setWinner(slots[key[2]].name, slots[key[5]].name, slots[key[8]].name))
    }
    if (slots[key[0]].value === slots[key[4]].value && slots[key[4]].value === slots[key[8]].value) {
      quantity = quantity + 1
      console.log('LEFT-TO-RIGHT diagonal win!')
      dispatch(setWinner(slots[key[0]].name, slots[key[4]].name, slots[key[8]].name))
    }
    if (slots[key[2]].value === slots[key[4]].value && slots[key[4]].value === slots[key[6]].value) {
      quantity = quantity + 1
      console.log('RIGHT-TO-LEFT diagonal win!')
      dispatch(setWinner(slots[key[2]].name, slots[key[4]].name, slots[key[6]].name))
    }
      console.log('quantity: ', quantity);

    if (quantity !== 0) {
      const prize = quantity*rate*7
      console.log('prize: ', prize)
      dispatch(changeBalance(prize))
      dispatch(changeLastPrize(prize))
      dispatch(showModalPrize())
    }
  }
}
