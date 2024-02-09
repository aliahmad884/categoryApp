import { Route, Routes } from 'react-router-dom';
import './App.css';



import ItemPanel from './Categories/category_items/Electronic_items';
import Home from './Categories/CategoryHome/categoryHome';
import HomePage from './Home/homeLayout';
import Welcomepage from './Home/welcomePage';
import ApplaincesItemPanel from './Categories/category_items/Applainces_items ';
import AccesooreisItemPanel from './Categories/category_items/Accessories_items';

import LoginForm from './Login/login';

import AdminLayout from './Admin/adminLayout';
import AdminWelcome from './Admin/adminWelcome';
import AdminCategory from './Admin/adminCategory';
import Empty from './Home/EmptyPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route index element={<Welcomepage />} />
          <Route path='category' element={<Home />} />
          <Route path='E.devices' element={<ItemPanel />} />
          <Route path='K.accessories' element={<ApplaincesItemPanel />} />
          <Route path='E.accessories' element={<AccesooreisItemPanel />} />

          <Route path='EmptyPage' element={<Empty />} />
        </Route>
      </Routes>

      <Routes>
        <Route path='adminLogin' element={<LoginForm />} />
      </Routes>

      <Routes>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminWelcome />} />
          <Route path='Category' element={<AdminCategory />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
