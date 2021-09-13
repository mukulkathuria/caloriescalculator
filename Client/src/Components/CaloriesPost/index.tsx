import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CaloriesData } from '../../Redux/Reducerdtos/caloriesReducer.dto';
import { checkString } from '../../Utils/Validations';
import {
  RecentComments,
  Comments,
  CommentFlex,
  ImageDiv,
  Subbtn
} from './Style';

type Calory = {
  calories: CaloriesData[];
};

const { default: editpng } = require('../../Assets/images/editmodify.png');
const { default: deletepng } = require('../../Assets/images/deleteicon.png');

const CaloriesPost: React.FC<Calory> = memo((props) => {
  const { calories } = props;
  const [data, setData] = useState(() => ({
    desc: '',
    calories: 0
  }));
  const dispatch = useDispatch();

  const handleDelete = useCallback((id) => {
    import('../../Redux/Reducers/caoriesReducer.actions').then(
      ({ deleteCalory }) => dispatch(deleteCalory(id))
    );
  }, []);

  const handleEdit = useCallback((id: string, desc: string, cal: number) => {
    import('../../Redux/Reducers/caoriesReducer.actions').then(
      ({ editCalorie }) => dispatch(editCalorie(id))
    );
    setData(() => ({ calories: cal, desc }));
  }, []);

  const handleSave = useCallback((id: string, vals) => {
    if (!checkString(vals.desc) && typeof vals.calories === 'number') {
      const val = {
        objid: id,
        desc: vals.desc,
        calories: vals.calories
      };
      import('../../Redux/Reducers/caoriesReducer.actions').then(
        ({ updateCalory }) => dispatch(updateCalory(val))
      );
    } else {
      console.log('Validation Error');
    }
  }, []);
  return (
    <>
      {calories.map((l) => (
        <RecentComments key={l._id}>
          <Comments>
            <ImageDiv>
              {!l.edit && (
                <img
                  src={editpng}
                  alt=""
                  onClick={() => handleEdit(l._id, l.desc, l.calories)}
                />
              )}
              <img src={deletepng} alt="" onClick={() => handleDelete(l._id)} />
            </ImageDiv>
            <CommentFlex>
              <div>description</div>
              {l.edit ? (
                <input
                  type="text"
                  value={data.desc}
                  onChange={(e) =>
                    setData(() => ({ ...data, desc: e.target.value }))
                  }
                />
              ) : (
                <div>{l.desc}</div>
              )}
            </CommentFlex>
            <CommentFlex>
              <div>calories intake</div>
              {l.edit ? (
                <input
                  type="number"
                  value={data.calories}
                  onChange={(e) =>
                    setData(() => ({
                      ...data,
                      calories: Number(e.target.value)
                    }))
                  }
                />
              ) : (
                <div>{l.calories}</div>
              )}
            </CommentFlex>
          </Comments>
          {l.edit && (
            <Subbtn
              onClick={() => handleSave(l._id, data)}
              disabled={!data.desc}
            >
              Save
            </Subbtn>
          )}
        </RecentComments>
      ))}
    </>
  );
});

export default CaloriesPost;
