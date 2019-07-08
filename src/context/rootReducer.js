import { INCREMENT, DECREMENT, RESET } from "../actions/types";

const increaseCount = state => ({ count: state.count + 1 });

const decreaseCount = state => ({ count: state.count - 1 });

const resetCount = () => ({ count: 0 });

export default (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return increaseCount(state, action);

    case RESET:
      return resetCount(state, action);

    case DECREMENT:
      return decreaseCount(state, action);

    default:
      return state;
  }
};
