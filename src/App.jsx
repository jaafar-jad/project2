import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetails';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path='/' element={<Profile userName='lucidize-jad' />} />
          <Route path='/projects' element={<Projects userName='lucidize-jad' />} />
          <Route
            path='/projects/:name'
            element={<ProjectDetail userName='lucidize-jad' />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;