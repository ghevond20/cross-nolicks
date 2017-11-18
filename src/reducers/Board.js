const Board = (state = {}, action) => {
  switch (action.type) {
    case "SET_DEFAULT_BOARD":
      return {...state,board:action.board, currentFigure:action.currentFigure};
    case "UPDATE_BOARD":
    const currentFigure = changeCurrent(state.currentFigure)
      return {...state,board:action.board,currentFigure };
    default:
      return state;
  }
}
const changeCurrent = (currentFigure) =>{
  if(currentFigure === 'X'){
    return 'O'
  }
  return 'X'
}

export default Board
