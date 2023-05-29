const ACTION = {
    ADD_DIGIT : 'add_digit',
    CHOOSE_OPERATION : 'choose_operation',
    CLEAR: 'clear',
    DELETE: 'delete',
    EVALUATE : 'evaluate'
  }
  
  export default function OperationsButtons({ dispatch, operation}) {
    console.log(dispatch,operation)
    return   <button onClick={() => dispatch({type: ACTION.CHOOSE_OPERATION , payload: {operation}})}>{operation}</button>
  }