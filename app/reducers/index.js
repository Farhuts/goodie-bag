import axios from 'axios';
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk';
import SingleCandy from '../Components/SingleCandy';

const initialState = {
  candies: [],
  candy: {}
}

const GET_ALL_CANDIES = 'GET_ALL_CANDIES';
const GET_ONE_CANDY = 'GET_ONE_CANDY';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const getAllCandies = (candies)=>{
  return {
    type: GET_ALL_CANDIES,
    candies
  }
}

export const getOneCandy = (candyId) =>{
  return {
    type: GET_ONE_CANDY,
    candyId
  }
}

export const increment = (quantity) =>{
  return {
    type: INCREMENT,
    quantity
  }
}

export const decrement = (quantity) =>{
  return {
    type: DECREMENT,
    quantity
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CANDIES:
      return {...state, candies: action.candies}
    case GET_ONE_CANDY:
      return {...state, candy: action.candyId}
    case INCREMENT:
    const newCandy = Object.assign({}, state.candy);
    newCandy.quantity = action.quantity + 1;
      return {...state, candy: newCandy}
    case DECREMENT:
    const oldCandy = Object.assign({}, state.candy);
      oldCandy.quantity = action.quantity - 1;
        return {...state, candy: oldCandy}
    default:
      return state
  }
}

// AXIOS REQUESTS
// Get all candies
export const fetchCandies = () => {
  return async(dispatch)=>{
    const {data} = await axios.get('/api/candies')
    dispatch(getAllCandies(data))
  }
}

// Get one candy
export const fetchOneCandy = (candyId) => {
  return async(dispatch)=>{
    const {data} = await axios.get(`/api/candies/${candyId}`)
    dispatch(getOneCandy(data))
  }
}

export default rootReducer
