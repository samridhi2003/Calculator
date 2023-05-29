const ACTION = {
  ADD_DIGIT : 'add_digit',
  CHOOSE_OPERATION : 'choose_operation',
  CLEAR: 'clear',
  DELETE: 'delete',
  EVALUATE : 'evaluate'
}

export default function DigitButton({ dispatch, digit}) {
  console.log(dispatch,digit)
  return   <button onClick={() => dispatch({type: ACTION.ADD_DIGIT , payload: {digit}})}>{digit}</button>
}
