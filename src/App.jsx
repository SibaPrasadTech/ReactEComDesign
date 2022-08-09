import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  const user = true;
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={user ? <Navigate to="/" replace/> : <Login/>}></Route>
      <Route path='/register' element={user ? <Navigate to="/" replace/> : <Register/>}></Route>

      
      <Route path='/product/:id' element={<Product/>}></Route>
      <Route path='/products/:category' element={<ProductList/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    // <div className="App">
    //   {/* <Home /> */}
    //   {/* <ProductList/> */}
    //   {/* <Product/> */}
    //   {/* <Register/> */}
    //   {/* <Login/> */}
    //   <Cart/>
    // </div>
  );
}

export default App;
