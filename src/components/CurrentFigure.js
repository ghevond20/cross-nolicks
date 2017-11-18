import React, { Component } from 'react';
import Loading from './Loading'
class CurrentFigure extends Component {


  render() {
    const { currentFigure }=this.props
    if(!currentFigure){
      return (<Loading />)
    }
    return (
        <div className="currentFigure">{currentFigure}</div>
    );
  }
}

export default CurrentFigure;
