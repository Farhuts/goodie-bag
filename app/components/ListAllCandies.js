import React, { Component } from 'react';
import { fetchCandies } from '../reducers/index';
import { connect } from 'react-redux';
import Root from './Root'

class ListAllCandies extends Component {
  constructor() {
    super();
  }
  componentDidMount () {
    this.props.fetchCandies()
  }

  render(){
    console.log(this.props)
    const candies = this.props.candies;
    // const name = candies.map(candy => candy.name)
    return (
      candies.map(candy => (
        <div className='candyName'>
          <h1 key={candy.id}>{candy.name} {candy.quantity} <img src={candy.imageUrl} /></h1>
        </div>
      ))
    )
  }
}

const mapState = (state) => {
  return {
    candies: state.candies
  }
}
const mapDispatch = (dispatch) => {
  return {
    fetchCandies: () => dispatch(fetchCandies())
  }
}

export default connect(mapState, mapDispatch)(ListAllCandies)
