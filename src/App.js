
import './App.css';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Home from './components/layouts/Home';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './components/layouts/product/ProductDetail';
import ProductSearch from './components/layouts/product/ProductSearch';
import Login from './components/layouts/user/login';
import Register from './components/layouts/user/Register';
import store from './store';
import { loadUser } from './actions/userActions';
import { useEffect } from 'react';
import Profile from './components/layouts/user/Profile';


function App() {

  useEffect(() =>{
     store.dispatch(loadUser)
  })
  
  return (
    <Router>
     <div className="App">
     <HelmetProvider>
     <Header/>
     <div className="container container-fluid">
     <ToastContainer theme='dark'/>
     <Routes>
    <Route path= '/' element={<Home/>} />
    <Route path= '/search/:keyword' element={<ProductSearch/>} />
    <Route path= '/product/:id' element={<ProductDetail/>} />
    <Route path= '/login' element={<Login/>} />
    <Route path= '/register' element={<Register/>} />
    <Route path= '/myprofile' element={<Profile/>} />
</Routes>
     </div>
    
   <Footer/>
     </HelmetProvider>
    
    </div>

    </Router>
   
  );
}

export default App;
