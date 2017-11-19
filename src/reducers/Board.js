const Board = (state = {}, action) => {
  switch (action.type) {
    case "SET_DEFAULT_BOARD":
      return {...state,board:action.board, currentFigure:action.currentFigure,win:action.win};
    case "SET_DEFAULT_WINNER":
      return {...state,winX:action.winX,winO:action.winO};
    case "UPDATE_BOARD":
      const currentFigure = changeCurrent(state.currentFigure, action.win)
      const winner = checkWinner(action.win,state.currentFigure,state.winX,state.winO)
      return {...state,board:action.board,currentFigure, win:action.win, winX:winner.winX, winO:winner.winO };
    default:
      return state;
  }
}

const checkWinner = (win, currentFigure, winX, winO) =>{
  console.log(win, currentFigure, winX, winO);
  if(!win){
    return {winX,winO}
  }
  if(currentFigure === 'X'){
    winX++
  }else {
    winO++
  }
  console.log(winX,winO);
  return {winX,winO}
}

const changeCurrent = (currentFigure, win) =>{
  if(win){
    return currentFigure
  }
  if(currentFigure === 'X'){
    return 'O'
  }
  return 'X'
}

export default Board
