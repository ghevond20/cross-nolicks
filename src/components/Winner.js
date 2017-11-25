import React, { Component } from 'react';
import Loading from './Loading'
import {setDefaultBoard} from '../actions/actionTypes'


class Winner extends Component {

  startGame = () => {
    const {dispatch} = this.props
    dispatch(setDefaultBoard())
  }

  getAgainButton(){
    const {win,draw} = this.props
    if(win || draw){
      return (
        <button onClick={this.startGame}>AGAIN</button>
      )
    }
  }

  render() {
    const { winX, winO, gameTotalCount }=this.props
    if(winX === undefined || winO === undefined){
      return (<Loading />)
    }
    let drawCount = 0;
    if(gameTotalCount>1){
      drawCount = gameTotalCount-(winX+winO)
    }
    return (
        <div className="winner">
          <div className="winner_item">ToTal Count is {gameTotalCount} </div>
          <div className="winner_item">X - POINT {winX}</div>
          <div className="winner_item">O - POINT {winO}</div>
          <div className="winner_item">Draw Count is {drawCount} </div>
          {this.getAgainButton()}
        </div>
    );
  }
}

export default Winner;
