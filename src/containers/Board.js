import { connect } from 'react-redux'
import Board from '../components/Board'

const mapStateToProps = (state) => ({
  currentFigure:state.Board.currentFigure,
  board:state.Board.board
})

 const BoardContainer = connect(mapStateToProps
)(Board)

export default BoardContainer
