import axios from 'axios';
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk';
import SingleCandy from '../Components/SingleCandy';

const initialState = {
  candies: []
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

export const decrement = (count) =>{
  return {
    type: DECREMENT,
    amount
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CANDIES:
      return {...state, candies: action.candies}
    case GET_ONE_CANDY:
      return {...state, candies: action.candyId}
    case INCREMENT:
      return {...state, candies: action.quantity + 1}
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
