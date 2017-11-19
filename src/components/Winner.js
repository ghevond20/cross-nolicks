import React, { Component } from 'react';
import Loading from './Loading'
import {setDefaultBoard} from '../actions/actionTypes'


class Winner extends Component {

  startGame = () => {
    const {dispatch} = this.props
    dispatch(setDefaultBoard())
  }

  getAgainButton(){
    const {win} = this.props
    if(win){
      return (
        <button onClick={this.startGame}>AGAIN</button>
      )
    }
  }

  render() {
    const { winX, winO }=this.props
    if(winX === undefined || winO === undefined){
      return (<Loading />)
    }
    return (
        <div className="winner">
          <div className="winner_item">X - POINT {winX}</div>
          <div className="winner_item">O - POINT {winO}</div>
          {this.getAgainButton()}
        </div>
    );
  }
}

export default Winner;
