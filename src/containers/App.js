import React, { Component } from 'react'
import Board from './Board'
import CurrentFigure from './CurrentFigure'


class App extends Component {
  render() {
    return (
      <div>
        <Board  />
        <CurrentFigure  />
      </div>
    )
  }
}
export default App
