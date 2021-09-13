import React, { lazy, memo, Suspense, useEffect } from 'react';
import { MainHomeDiv } from './Style';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import { StoreDto } from '../../Redux/Reducerdtos/store.dto';

const HomeHeader = lazy(() => import('./HomeHeader'));
const CaloriesPost = lazy(() => import('../CaloriesPost'));
const TotalCalories = lazy(() => import('./TotalCalories'));
const AddCalories = lazy(() => import('../AddCalories'));

const HomePage = memo(() => {
  const dispatch = useDispatch();
  const {
    isFetching,
    error,
    calories: calData
  } = useSelector((state: StoreDto) => state.caloryReducer);

  useEffect(() => {
    import('../../Redux/Reducers/caoriesReducer.actions').then(
      ({ fetchData }) => dispatch(fetchData())
    );
  }, []);

  if (isFetching) return <Loader />;
  return (
    <MainHomeDiv>
      <Suspense fallback={<Loader />}>
        <HomeHeader />
        <AddCalories />
        {error && <p>{error}</p>}
        {calData && <TotalCalories cals={calData} />}
        {calData && <CaloriesPost calories={calData || []} />}
      </Suspense>
    </MainHomeDiv>
  );
});

export default HomePage;
