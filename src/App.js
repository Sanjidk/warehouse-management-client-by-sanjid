import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/Shared/NotFound/NotFound';

import Login from './components/Login/Login/Login';
import Signup from './components/Login/Signup/Signup';

import AddItem from './components/Main/AddItem/AddItem';
import Blogs from './components/Main/Blogs/Blogs';
import Home from './components/Main/Home/Home';
import MyItems from './components/Main/MyItems/MyItems';
import Items from './components/Main/Items/Items';
import ManageItems from './components/Main/ManageItems/ManageItems';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>} ></Route>
        <Route path="/items" element={<Items></Items>} ></Route>
        <Route path="/additem" element={<AddItem></AddItem>} ></Route>
        <Route path="/myitems" element={<MyItems></MyItems>} ></Route>
        <Route path="/manageitems" element={<ManageItems></ManageItems>} ></Route>

        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/signup" element={<Signup></Signup>} ></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
