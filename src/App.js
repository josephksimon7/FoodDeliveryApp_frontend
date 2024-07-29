import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import Home from './Pages/Home/Home';
import EmailVerification from './Pages/EmailVerification/EmailVerification';
import PhoneVerification from './Pages/PhoneVerification/PhoneVerification'; 
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import AdminPanel from './Pages/AdminPanel/AdminPanel';



function App() {
  return (
    <div className="App">
<Routes>

<Route path='/' element={<Login></Login>}/>
<Route path='/home' element={<Home></Home>  } />
<Route path='/emailverification' element={<EmailVerification></EmailVerification> } />
<Route path='/phoneverification' element={<PhoneVerification></PhoneVerification>} />
<Route path='/cart' element={<Cart></Cart>} />
<Route path='/order' element={<PlaceOrder></PlaceOrder>} />
<Route path='/admin' element={<AdminPanel></AdminPanel>}/>




</Routes>
    </div>
  );
}

export default App;
