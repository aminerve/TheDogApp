import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingleDog from './pages/SingleDog';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:name' element={<SingleDog/>}/>
      </Routes>
    </div>
  );
}

export default App;
