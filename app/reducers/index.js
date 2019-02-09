import axios from 'axios';
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'

const initialState = {
  candies: []
}

const GET_ALL_CANDIES = 'GET_ALL_CANDIES';

export const getAllCandies = (candies)=>{
  return {
    type: GET_ALL_CANDIES,
    candies
  }
}

// Get
export const fetchCandies = () => {
  return async(dispatch)=>{
    const {data} = await axios.get('/api/candies')
    dispatch(getAllCandies(data))
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CANDIES:
      return {...state, candies: action.candies}
    default:
      return state
  }
}

export default rootReducer
