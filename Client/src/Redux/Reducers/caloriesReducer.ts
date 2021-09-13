import {
  CaloriesInitialDto,
  CaloryActionDto
} from '../Reducerdtos/caloriesReducer.dto';
import {
  ADD_NEW_DATA,
  DELETE_DATA,
  EDIT_DATA,
  ERROR_ON_FETCHING,
  FETCHING_DATA,
  FETCH_DATA,
  UPDATE_DATA
} from '../ReducersTypes/caloryReducer.types';

const initialValues: CaloriesInitialDto = {
  isFetching: false,
  calories: null,
  error: null
};

export function caloryReducer(state = initialValues, action: CaloryActionDto) {
  switch (action.type) {
    case ADD_NEW_DATA:
      return {
        ...state,
        calories: state.calories?.push(action.payload)
      };

    case EDIT_DATA:
      return {
        ...state,
        calories: action.payload
      };

    case DELETE_DATA:
      return {
        ...state,
        calories: action.payload
      };

    case UPDATE_DATA:
      return {
        ...state,
        calories: action.payload
      };

    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_DATA:
      return {
        ...state,
        calories: action.payload,
        isFetching: false
      };

    case ERROR_ON_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
