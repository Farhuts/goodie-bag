import React, { Component } from 'react';
import { fetchCandies, fetchOneCandy, increment } from '../reducers/index';
import { connect } from 'react-redux';
import Root from './Root';
import {Link} from 'react-router-dom';

class SingleCandy extends Component {
  constructor(props){
    super(props)
    this.increase = this.increase.bind(this)
  }

  componentDidMount () {
    const candyId = this.props.match.params.candyId;
    this.props.fetchOneCandy(candyId)
  }

   increase(){
    const quantity = this.props.candies.quantity
    this.props.increment(quantity)
    console.log(quantity, quantity)
  }

  render(){
     const candy = this.props.candies;
    return (
      <div className="main">
        <h1>{candy.name} </h1>
        <h1> {candy.quantity} </h1>
        <p> <img src={candy.imageUrl}/> </p>

        <span className="button">
          <button onClick={this.increase}>Increase</button>
          <button>Decrease</button>
        </span>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    candies: state.candies,
    candy: state.candyId,
    quanity: state.quanity
  }
}
const mapDispatch = (dispatch) => {
  return {
    fetchOneCandy: candyId => {
      dispatch(fetchOneCandy(candyId))
    },
    increment: (quantity, plus) => {
      dispatch(increment(quantity, plus))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleCandy)
