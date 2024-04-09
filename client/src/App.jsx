import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; 
import Sign from './pages/Sign';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
  
      </Routes>
    </BrowserRouter>
  );
}