import {Routes, Route} from 'react-router'
import Main from './pages/main'
import Todos from './pages/todo'
import Navbar from './components/Navbar';
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/todo' element={<Todos/>}/>
      </Routes>
    </div>
  );
}

export default App;
