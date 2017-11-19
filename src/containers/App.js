import React, { Component } from 'react'
import Board from './Board'
import CurrentFigure from './CurrentFigure'
import Winner from './Winner'


class App extends Component {
  render() {
    return (
      <div>
        <Board  />
        <CurrentFigure  />
        <Winner />
      </div>
    )
  }
}
export default App
