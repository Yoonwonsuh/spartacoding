import React, { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import './Box.scss';

const Box1 = () => {
  const [box1State, setBox1State] = useState(1);
  useEffect(() => {
    console.log(
      '1번째 박스가 렌더링 되었습니다. 위에서 선언한 useEffect 함수입니다.'
    );
  }, []);
  
  console.log('1번째 박스가 렌더링 되었습니다.');

  useEffect(() => {
    console.log(
      '1번째 박스가 렌더링 되었습니다. 아래에서 선언한 useEffect 함수입니다.'
    );
  }, []);

  useLayoutEffect(() => {
    console.log(
      '1번째 박스가 렌더링 되었습니다. 아래에서 선언한 useLayoutEffect 함수입니다.'
    );
  }, []);

  const onClickHandler = () => {
    const newBoxState = box1State + 1;
    setBox1State(newBoxState);
  };

  return (
    <div className="Box_Wrap">
      1번째 박스입니다.
      <button onClick={onClickHandler}>버튼입니다.</button>
      <div>{box1State}</div>
    </div>
  );
};

export default Box1;
