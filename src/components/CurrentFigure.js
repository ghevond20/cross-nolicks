import React, { Component } from 'react';
import Loading from './Loading'
class CurrentFigure extends Component {


  render() {
    const { currentFigure, win }=this.props
    if(!currentFigure){
      return (<Loading />)
    }
    if(win){
      return(<div/>)
    }
    return (
        <div className="currentFigure">{currentFigure}</div>
    );
  }
}

export default CurrentFigure;
