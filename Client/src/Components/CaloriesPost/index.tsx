import React, { memo } from 'react';
import { CaloriesData } from '../../Redux/Reducerdtos/caloriesReducer.dto';
import { RecentComments, Comments, CommentFlex, ImageDiv } from './Style';

type Calory = {
  calories: CaloriesData[];
};

const { default: editpng } = require('../../Assets/images/editmodify.png');
const { default: deletepng } = require('../../Assets/images/deleteicon.png');

const CaloriesPost: React.FC<Calory> = memo((props) => {
  const { calories } = props;
  return (
    <>
      {calories.map((l) => (
        <RecentComments key={l._id}>
          <Comments>
            <ImageDiv>
              {!l.edit && <img src={editpng} alt="" />}
              <img src={deletepng} alt="" />
            </ImageDiv>
            <CommentFlex>
              <div>description</div>
              {l.edit ? <input type="text" /> : <div>{l.desc}</div>}
            </CommentFlex>
            <CommentFlex>
              <div>calories intake</div>
              {l.edit ? <input type="number" /> : <div>{l.calories}</div>}
            </CommentFlex>
          </Comments>
          {l.edit && <button>Save</button>}
        </RecentComments>
      ))}
    </>
  );
});

export default CaloriesPost;
