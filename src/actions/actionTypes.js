export const setDefaultBoard = () => ({
  type:'SET_DEFAULT_BOARD',
  board:[['','',''],['','',''],['','','']],
  currentFigure:'X'
})

export const updateBoard = (board) => ({
  type:'UPDATE_BOARD',
  board
})
