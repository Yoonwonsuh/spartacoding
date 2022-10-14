import React, { useState } from 'react';
import './Box.scss';

const Box3 = () => {
  const [box3State, setBox3State] = useState(1);
  console.log('3번째 박스가 렌더링 되었습니다.');
  const onClickHandler = () => {
    const newBoxState = box3State + 1;
    setBox3State(newBoxState);
  };

  return (
    <div className="Box_Wrap">
      3번째 박스입니다.
      <button onClick={onClickHandler}>버튼입니다.</button>
      <div>{box3State}</div>
    </div>
  );
};

export default Box3;
