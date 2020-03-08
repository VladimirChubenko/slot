import { SET_WIN, UPD_FIELD, CHANGE_RATE, CHANGE_BALANCE, RESET_WIN, CHANGE_LAST_PRIZE, 
  START_SPIN, STOP_SPIN_FIRST_COLUMN, STOP_SPIN_SECOND_COLUMN, STOP_SPIN_THIRD_COLUMN, 
  PLAY_FIRST_STOP_SOUND, PLAY_SECOND_STOP_SOUND, PLAY_THIRD_STOP_SOUND, RESET_STOP_SOUNDS, PLAY_BONUS_SOUND, STOP_BONUS_SOUND, 
  HIDE_MODAL_PRIZE, SHOW_MODAL_PRIZE} from "./actionsTypes";

export function spin(rate, balance) {
  return async (dispatch, getState) => {   
    const allValues =  getState().field.allPossibilities

    let newField = [ 
      allValues[Math.floor(Math.random() * 5)],
      allValues[Math.floor(Math.random() * 5)],
      allValues[Math.floor(Math.random() * 5)],
      allValues[Math.floor(Math.random() * 5)],
      allValues[Math.floor(Math.random() * 5)],
      allValues[Math.floor(Math.random() * 5)],
      allValues[Math.floor(Math.random() * 5)],
      allValues[Math.floor(Math.random() * 5)],
      allValues[Math.floor(Math.random() * 5)]
    ]
    
    if (rate > balance) {
      return null
    } else {
      dispatch(resetModal())
      dispatch(resetWinners())
      dispatch(startSpin())
      dispatch(changeBalance(-rate))
      dispatch(updateField(newField))
      
      await stopColumn(stopSpinFirstColumn).then(result => dispatch(result))
      dispatch(siglePlay(firstColumnStopSound))
      await stopColumn(stopSpinSecondColumn).then(result => dispatch(result))
      dispatch(siglePlay(secondColumnStopSound))
      await stopColumn(stopSpinThirdColumn).then(result => dispatch(result))
      dispatch(siglePlay(thirdColumnStopSound))
      
      dispatch(checkWinners())

      console.log('eee');
      
    }
  }
}

let stopColumn = func => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(func()), 1000)
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

// PRIZE

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

function resetModal() {
  return dispatch => {
    dispatch(hideModalPrize())
    dispatch(stopBonusSound())
  }
}

// SOUNDS

function firstColumnStopSound() {
  return {
    type: PLAY_FIRST_STOP_SOUND
  }
}
function secondColumnStopSound() {
  return {
    type: PLAY_SECOND_STOP_SOUND
  }
}
function thirdColumnStopSound() {
  return {
    type: PLAY_THIRD_STOP_SOUND
  }
}
function resetStopSounds() {
  return {
    type: RESET_STOP_SOUNDS
  }
}

function siglePlay(func) {
  return dispatch => {
    dispatch(func())
    setTimeout(() => dispatch(resetStopSounds()), 300)
  }
}

function startBonusSound() {
  return {
    type: PLAY_BONUS_SOUND
  }
}

export function stopBonusSound() {
  return {
    type: STOP_BONUS_SOUND
  }
}

// AFTER SPIN

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
      const prize = quantity*rate*10
      console.log('prize: ', prize)
      dispatch(changeBalance(prize))
      dispatch(changeLastPrize(prize))
      dispatch(startBonusSound())
      dispatch(showModalPrize())
    }
  }
}
