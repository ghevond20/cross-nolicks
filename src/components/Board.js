import React, { Component } from 'react';
import {setDefaultBoard,updateBoard} from '../actions/actionTypes'
import Loading from './Loading'

class Board extends Component {

  componentWillMount(){
    const { dispatch} = this.props
    dispatch(setDefaultBoard())

  }

  onClickItem (colIndex,rowIndex) {
    const {board, currentFigure,dispatch} = this.props
    if(board[colIndex][rowIndex]!=''){
      return
    }
    board[colIndex][rowIndex]=currentFigure;
    dispatch(updateBoard(board))
  }

  getColResult = (col,colIndex) =>{
    return (col.map((item, index)=>{
      return (<div onClick={this.onClickItem.bind(this,colIndex,index)} key = {index } className="item">{item}</div>)
    }))
  }

  printBoard = () => {
    const {board} = this.props
    return (board.map((col,colIndex)=>{
          return (<div key = {colIndex} className="col">
            {this.getColResult(col,colIndex)}
          </div>)
    }))
  }

  render() {
    const { board }=this.props
    if(!board){
      return (<Loading />)
    }
    return (
        <div className='mainBord'>{this.printBoard()}</div>
    );
  }
}

export default Board;
