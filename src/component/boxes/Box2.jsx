import React, { useState } from 'react';
import './Box.scss';

const Box2 = () => {
  const [box2State, setBox2State] = useState(1);
  console.log('2번째 박스가 렌더링 되었습니다.');
  const onClickHandler = () => {
    const newBoxState = box2State + 1;
    setBox2State(newBoxState);
  };

  return (
    <div className="Box_Wrap">
      2번째 박스입니다.
      <button onClick={onClickHandler}>버튼입니다.</button>
      <div>{box2State}</div>
    </div>
  );
};

export default Box2;
