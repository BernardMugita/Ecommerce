import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import Home from './home/Home';
import About from './About/About';
import Footer from './components/Footer/Footer'
import Login from './login/Login';
import Singleproduct from './SingleProduct/Singleproduct'
import Cart from './Cart/Cart';
import Register from './register/Register'
import Success from './components/Success/Success'
import Products from './Products/Products';
import { useSelector } from 'react-redux';

export default function App() {

  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          <Route path="/success" element={<Success />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/product/:id" element={<Singleproduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
