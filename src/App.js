import ReactSample from './component/ReactSample.js'
import Pinocchio from './component/Pinocchio.js';
import Kirby from './component/Kirby.js';
import Snake from './component/Snake.js';
import './App.css'


function App() {
  const infos = [
    {
      key: 1,
      id: 'kyukim',
      pw:  'aaa',
      test: 'test'
    },
    {
      key: 2,
      id: 'inshin',
      pw: 'bbb'
    },
    {
      key: 3,
      id: 'junselee',
      pw: 'ccc'
    }
  ];
  return (
    <div className="App">
      <h2>App.js It's root</h2>
      <ReactSample />
      <Pinocchio data={infos}></Pinocchio>
      <Kirby item={infos}></Kirby>
      <Snake></Snake>
    </div>
  );
}

export default App;
