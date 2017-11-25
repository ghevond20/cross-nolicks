import { connect } from 'react-redux'
import Board from '../components/Board'

const mapStateToProps = (state) => ({
  currentFigure:state.Board.currentFigure,
  board:state.Board.board,
  win:state.Board.win,
  draw:state.Board.draw
})

 const BoardContainer = connect(mapStateToProps
)(Board)

export default BoardContainer
