import http from '../Interface/interceptor';
import { BASE_URL } from '../../Data/baseurl';
import {
  caloriesUserData,
  editCaloriesData
} from '../../Redux/Reducerdtos/caloriesReducer.dto';

export async function fetchCaloriesdata() {
  const { default: dayjs } = await import('dayjs');
  const date = dayjs().format('MM/DD/YYYY');
  const fetchDataUrl = BASE_URL + 'api/getcalories';
  const {
    data: { data }
  } = await http.get(fetchDataUrl, {
    params: {
      date
    }
  });
  return data[0];
}

export async function addCalories(values: caloriesUserData) {
  const addCaloryUrl = BASE_URL + 'api/addcalories';
  const {
    data: { data }
  } = await http.post(addCaloryUrl, values);
  return data[0];
}

export async function editCalories(values: editCaloriesData) {
  const editCalorieUrl = BASE_URL + 'api/editcalories';
  const {
    data: { data }
  } = await http.post(editCalorieUrl, values);
  return data[0];
}

export async function deleteCalory(objid: string) {
  const deleteCaloryUrl = BASE_URL + 'api/deletecalories';
  const { data } = await http.post(deleteCaloryUrl, { objid });
  return data;
}
