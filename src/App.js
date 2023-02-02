import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Nomatch from './components/shared/Nomatch';
import Projects from './components/shared/Projects';
import ContactMe from './components/shared/ContactMe';
import MainNavbar from './components/shared/MainNavbar';

const App = () => (
  <> 
    <MainNavbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contactme' element={<ContactMe />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>

)


export default App;
