
import './App.css';
import Home from './Pages/HomePage';
import NavBar from './Components/navBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTask from './Components/addTask';
import TaskList from './Pages/TaskList'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <nav className='sticky-nav'>
          <BrowserRouter>
            <NavBar />
            <main>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/addtask' element={<AddTask />} />
                <Route path='/tasklist' element={<TaskList />} />
              </Routes>
            </main>
          </BrowserRouter>
        </nav>
      </header>
    

    </div>
  );
}

export default App;
