import { connect } from 'react-redux'
import CurrentFigure from '../components/CurrentFigure'


const mapStateToProps = (state) => ({
  currentFigure: state.Board.currentFigure,
  win: state.Board.win
})

const CurrentFigureContainer = connect(mapStateToProps
)(CurrentFigure)

export default CurrentFigureContainer
