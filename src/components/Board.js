import React, { Component } from 'react';
import {setDefaultBoard,updateBoard,setDefaultWinner} from '../actions/actionTypes'
import Loading from './Loading'


class Board extends Component {

  componentWillMount(){
    const { dispatch} = this.props
    dispatch(setDefaultBoard())
    dispatch(setDefaultWinner())

  }

  onClickItem (colIndex,rowIndex) {
    const {board, currentFigure,dispatch} = this.props
    if(board[colIndex][rowIndex]!=''){
      return
    }
    board[colIndex][rowIndex]=currentFigure;
    let win = this.validate(board,colIndex,rowIndex)
    dispatch(updateBoard(board,win))
  }

  validate(board,colIndex,rowIndex){
    let res = this.validateHorizontal(board,colIndex,rowIndex);
    if(res){
      return true
    };
    res = this.validateVertical (board,colIndex,rowIndex);
    if(res){
      return true
    };
    res = this.validateDiagonalLR (board,colIndex,rowIndex);
    if(res){
      return true
    };
    res = this.validateDiagonalRL (board,colIndex,rowIndex);
    if(res){
      return true
    };
    return false
  }

  validateHorizontal (board,colIndex,rowIndex){
    const {currentFigure} = this.props;
    let result = true;
    board[colIndex].forEach((item)=>{
      if(item!=currentFigure){
        result=false
      }
    })
    return result
  }

  validateVertical (board,colIndex,rowIndex){
    const {currentFigure} = this.props;
    let result = true;
    board.forEach((col)=>{
      if(col[rowIndex]!=currentFigure){
        result=false
      }
    })
    return result
  }

  validateDiagonalLR (board,colIndex,rowIndex){
    const {currentFigure} = this.props;
    let result = true;
    for(let i=0;i<board.length;i++){
      if(board[i][i]!=currentFigure){
        result=false
      }
    }
    return result
  }

  validateDiagonalRL (board,colIndex,rowIndex){
    const {currentFigure} = this.props;
    let result = true;
    let index =board.length-1;
    for(let i=0;i<board.length;i++){
      if(board[index][i]!=currentFigure){
        result=false
      }
      index--;
    }
    return result
  }

  getColResult = (col,colIndex) =>{
    return (col.map((item, index)=>{
      let cursorClass = '';
      if(item!==''){
        cursorClass = 'disable'
      }
      return (<div onClick={this.onClickItem.bind(this,colIndex,index)} key = {index } className={"item "+cursorClass}>{item}</div>)
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
    const { board, win,currentFigure }=this.props
    if(!board){
      return (<Loading />)
    }
    if(win){
      return (<div>{currentFigure}, Win!!!</div>)
    }
    return (
        <div className='mainBord'>{this.printBoard()}</div>
    );
  }
}

export default Board;
