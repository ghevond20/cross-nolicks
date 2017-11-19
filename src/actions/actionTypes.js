export const setDefaultBoard = () => ({
  type:'SET_DEFAULT_BOARD',
  board:[['','',''],['','',''],['','','']],
  currentFigure:'X',
  win:false
})

export const updateBoard = (board,win) => ({
  type:'UPDATE_BOARD',
  board,
  win
})

export const setDefaultWinner = () => ({
  type:'SET_DEFAULT_WINNER',
  winX: 0,
  winO: 0
})
