import logo from './logo.svg';
import './App.css';
import Box1 from './component/boxes/Box1';
import Box2 from './component/boxes/Box2';
import Box3 from './component/boxes/Box3';

function App() {
  console.log('메인페이지 전체가 렌더링 되었습니다.')
  return (
<>
<Box1/>
<Box2/>
<Box3/>
</>
  );
}

export default App;
