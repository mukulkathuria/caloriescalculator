import { fetchCaloriesdata } from '../../Services/CaloriesCal/fetchCalories';
import {
  CaloriesData,
  caloriesUserData
} from '../Reducerdtos/caloriesReducer.dto';
import {
  DELETE_DATA,
  EDIT_DATA,
  ERROR_ON_FETCHING,
  FETCHING_DATA,
  FETCH_DATA
} from '../ReducersTypes/caloryReducer.types';

export async function addCalories(params: caloriesUserData) {
  return (dispatch: Function) => {
    dispatch();
  };
}

export async function editCalorie(objectId: string) {
  const {
    default: { getState }
  } = await import('../store');
  const { calories } = getState().caloryReducer;
  const values = calories?.map((l: CaloriesData) =>
    l._id === objectId ? { ...l, edit: true } : l
  );
  return {
    payload: values,
    type: EDIT_DATA
  };
}

export async function deleteCalory(objectId: string) {
  const {
    default: { getState }
  } = await import('../store');
  const { calories } = getState().caloryReducer;
  const values = calories?.filter((l: CaloriesData) => l._id !== objectId);
  return {
    payload: values,
    type: DELETE_DATA
  };
}

export function fetchData() {
  return async (dispatch: Function) => {
    try {
      dispatch({ type: FETCHING_DATA });
      const { calories } = await fetchCaloriesdata();
      const updatedCal = calories?.map(
        (l: CaloriesData) => true && { ...l, edit: false }
      );
      dispatch({ type: FETCH_DATA, payload: updatedCal });
    } catch (error) {
      dispatch({ type: ERROR_ON_FETCHING, payload: 'Error on Fetching' });
    }
  };
}
