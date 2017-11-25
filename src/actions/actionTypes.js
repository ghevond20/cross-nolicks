export const setDefaultBoard = () => ({
  type:'SET_DEFAULT_BOARD',
  board:[['','',''],['','',''],['','','']],
  currentFigure:'X',
  win:false,
  draw:false
})

export const updateBoard = (board,win,draw) => ({
  type:'UPDATE_BOARD',
  board,
  win,
  draw
})

export const setDefaultWinner = () => ({
  type:'SET_DEFAULT_WINNER',
  winX: 0,
  winO: 0,
  gameTotalCount: 0
})
