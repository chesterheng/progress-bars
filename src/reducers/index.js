import { READ_DATA, UPDATE_BAR, SELECT_BAR } from '../actions/types'; 

const INITIAL_STATE = {
  bars: [],
  buttons: [],
  limit: 0,
  activeBar: 0
}
const reducers = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case READ_DATA: return { ...state, ...action.payload };
    case UPDATE_BAR: {
      const newBars = [...state.bars];
      if(newBars[state.activeBar] + action.payload > 0)
        newBars[state.activeBar] += action.payload;
      return { ...state, bars: newBars };
    }
    case SELECT_BAR: return { ...state, activeBar: action.payload }
    default: return state;
  }
}

export default reducers;