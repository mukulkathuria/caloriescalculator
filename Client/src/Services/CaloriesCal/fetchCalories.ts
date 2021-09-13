import http from '../Interface/interceptor';
import { BASE_URL } from '../../Data/baseurl';

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
