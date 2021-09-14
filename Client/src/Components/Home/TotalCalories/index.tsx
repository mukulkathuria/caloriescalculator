import React, { memo, useEffect, useState } from 'react';
import { CaloriesData } from '../../../Redux/Reducerdtos/caloriesReducer.dto';
import { MainDiv } from './Style';

type TotalCal = {
  cals: CaloriesData[];
};

const {
  default: Yellowarr
} = require('../../../Assets/images/yellowarrowdown.png');
const { defaut: Redarr } = require('../../../Assets/images/redarrowup.png');
const { default: Green } = require('../../../Assets/images/greenarrow.png');

const TotalCalories: React.FC<TotalCal> = memo((props) => {
  const [totalCalories, setCalories] = useState(() => 0);

  useEffect(() => {
    import('../utils').then(({ getTotalCalories }) =>
      setCalories(() => getTotalCalories(props.cals))
    );
  }, [props.cals]);

  return (
    <MainDiv>
      <div>
        {(() => {
          switch (true) {
            case totalCalories > 0 && totalCalories <= 1000:
              return (
                <div>
                  Calories are too less , you have to take more calories
                  <img src={Yellowarr} alt="lesscalories" />
                </div>
              );

            case totalCalories > 1000 && totalCalories <= 2000:
              return (
                <div>
                  Calories gain is normal
                  <img src={Green} alt="netural" />
                </div>
              );

            case totalCalories > 2000:
              return (
                <div>
                  Calories are too high , you need take rest now
                  <img src={Redarr} alt="highcalories" />
                </div>
              );

            default:
              return null;
          }
        })()}
      </div>
      <div>
        Total Calories Today:
        {totalCalories}
      </div>
    </MainDiv>
  );
});

export default TotalCalories;
