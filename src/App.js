import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ShopCategory } from './Pages/ShopCategory';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />   {/* will be visible on all Pages */}
        <Routes>
          <Route path='/' element={<Shop />} />

          <Route path='/men' element={<ShopCategory category="men" />} />

          <Route path='/women' element={<ShopCategory category="women" />} />

          <Route path='/kids' element={<ShopCategory category="kids" />} />

          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>

          <Route path='/cart' element={<Cart />} />

          <Route path='/login' element={<LoginSignup />} />

        </Routes>

        <Footer/> {/* will be visible on all Pages */}
      </BrowserRouter>
    </div>
  );
}

export default App;
