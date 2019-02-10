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
    console.log(quantity)
  }

  render(){
     const candy = this.props.candies;
     console.log(candy)
    return (
      <div className="center-align">
        <h2 className='pink-text darken-3'>{candy.name} </h2>
        <h3 className=" brown-text darken-4"> {candy.quantity} </h3>
        <p> <img src={candy.imageUrl}/> </p>

          <button className="waves-effect waves-light btn-large" onClick={this.increase}>Increase</button>
          <button className="waves-effect pink accent-4 btn-large">Decrease</button>
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
    }
  }
}

export default connect(mapState, mapDispatch)(SingleCandy)
