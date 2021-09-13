import React, { memo, useEffect, useState } from 'react';
import { CaloriesData } from '../../../Redux/Reducerdtos/caloriesReducer.dto';

type TotalCal = {
  cals: CaloriesData[];
};

const TotalCalories: React.FC<TotalCal> = memo((props) => {
  const [totalCalories, setCalories] = useState(() => 0);

  useEffect(() => {
    import('../utils').then(({ getTotalCalories }) =>
      setCalories(() => getTotalCalories(props.cals))
    );
  }, []);

  return (
    <div>
      <div>
        {(() => {
          switch (true) {
            case totalCalories > 0 && totalCalories <= 1000:
              return (
                <div>
                  Calories are too less , you have to take more calories
                </div>
              );

            case totalCalories > 1000 && totalCalories <= 2000:
              return <div>Calories gain is normal</div>;

            case totalCalories > 2000:
              return <div>Calories are too high , you need take rest now</div>;

            default:
              return null;
          }
        })()}
      </div>
      <div>
        Total Calories Today:
        {totalCalories}
      </div>
    </div>
  );
});

export default TotalCalories;
