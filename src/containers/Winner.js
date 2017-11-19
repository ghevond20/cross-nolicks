import { connect } from 'react-redux'
import Winner from '../components/Winner'

const mapStateToProps = (state) => ({
  winX:state.Board.winX,
  winO:state.Board.winO,
  win:state.Board.win
})

 const WinnerContainer = connect(mapStateToProps
)(Winner)

export default WinnerContainer
