import api from "../api";
import { READ_DATA, UPDATE_BAR, SELECT_BAR } from './types';

export const readData = () => async dispatch => {
  const response = await api.get('/bars');
  dispatch({
    type: READ_DATA,
    payload: response.data
  })
}

export const updateBar = value => {
  return {
    type: UPDATE_BAR,
    payload: value
  }
}

export const selectBar = id => {
  return {
    type: SELECT_BAR,
    payload: id
  };
}
