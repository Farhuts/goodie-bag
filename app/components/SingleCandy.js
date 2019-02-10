import React, { Component } from 'react';
import { fetchCandies, fetchOneCandy, increment, decrement } from '../reducers/index';
import { connect } from 'react-redux';
import Root from './Root';
import {Link} from 'react-router-dom';

class SingleCandy extends Component {
  constructor(props){
    super(props)
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }

  componentDidMount () {
    const candyId = this.props.match.params.candyId;
    this.props.fetchOneCandy(candyId)
  }

   increase(){
    const quantity = this.props.candy.quantity
    this.props.increment(quantity)
    console.log(quantity)
  }

  decrease(){
    const quantity = this.props.candy.quantity
    this.props.decrement(quantity)
    console.log(quantity)
  }

  render(){
     const {candy} = this.props;
     console.log(candy)
    return (
      <div className="center-align">
        <h2 className='pink-text darken-3'>{candy.name} </h2>
        <h3 className=" brown-text darken-4">Quantity is: {candy.quantity} </h3>
        <p> <img src={candy.imageUrl}/> </p>

          <button className="waves-effect waves-light btn-large" onClick={this.increase}>Increase</button>
          <button className="waves-effect pink accent-4 btn-large" onClick={this.decrease}>Decrease</button>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    candies: state.candies,
    candy: state.candy
  }
}
const mapDispatch = (dispatch) => {
  return {
    fetchOneCandy: candyId => {
      dispatch(fetchOneCandy(candyId))
    },
    increment: quantity => {
      dispatch(increment(quantity))
    },
    decrement: quantity => {
      dispatch(decrement(quantity))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleCandy)
