import {
  CaloriesData,
  caloriesUserData,
  editCaloriesData
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

export function addCalories(params: caloriesUserData) {
  return async (dispatch: Function) => {
    const { addCalories } = await import(
      '../../Services/CaloriesCal/fetchCalories'
    );
    const { calories } = await addCalories(params);
    const updatedCal = calories?.map(
      (l: CaloriesData) => true && { ...l, edit: false }
    );
    dispatch({ payload: updatedCal, type: ADD_NEW_DATA });
  };
}

export function editCalorie(objectId: string) {
  return async (dispatch: Function) => {
    const {
      default: { getState }
    } = await import('../store');
    const { calories } = getState().caloryReducer;
    const values = calories?.map((l: CaloriesData) =>
      l._id === objectId ? { ...l, edit: true } : l
    );
    dispatch({
      payload: values,
      type: EDIT_DATA
    });
  };
}

export function deleteCalory(objectId: string) {
  return async (dispatch: Function) => {
    try {
      const { deleteCalory: deleteCalories } = await import(
        '../../Services/CaloriesCal/fetchCalories'
      );
      await deleteCalories(objectId);
      const {
        default: { getState }
      } = await import('../store');
      const { calories } = getState().caloryReducer;
      const values = calories?.filter((l: CaloriesData) => l._id !== objectId);
      dispatch({
        payload: values,
        type: DELETE_DATA
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateCalory(params: editCaloriesData) {
  return async (dispatch: Function) => {
    try {
      const { editCalories } = await import(
        '../../Services/CaloriesCal/fetchCalories'
      );
      const { calories } = await editCalories(params);
      const updatedCal = calories?.map(
        (l: CaloriesData) => true && { ...l, edit: false }
      );
      dispatch({ payload: updatedCal, type: UPDATE_DATA });
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchData() {
  return async (dispatch: Function) => {
    try {
      dispatch({ type: FETCHING_DATA });
      const { fetchCaloriesdata } = await import(
        '../../Services/CaloriesCal/fetchCalories'
      );
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
