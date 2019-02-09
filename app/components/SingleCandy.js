import React, { Component } from 'react';
import { fetchCandies, fetchOneCandy } from '../reducers/index';
import { connect } from 'react-redux';
import Root from './Root';
import {Link} from 'react-router-dom';

class SingleCandy extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount () {
    const candyId = this.props.match.params.candyId;
    console.log(candyId)
    this.props.fetchOneCandy(candyId)
  }

  render(){
     const candy = this.props.candies;
    return (
      <div className="main">
        <h1>{candy.name} {candy.quantity} <img src={candy.imageUrl}/> </h1>
        <span class="button">
          <button>Increase</button>
          <button>Decrease</button>
        </span>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    candies: state.candies,
    candy: state.candyId
  }
}
const mapDispatch = (dispatch) => {
  return {
    fetchOneCandy: candyId => {
      dispatch(fetchOneCandy(candyId))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleCandy)
