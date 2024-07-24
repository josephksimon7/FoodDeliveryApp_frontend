import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import Home from './Pages/Home/Home';
import EmailVerification from './Pages/EmailVerification/EmailVerification';
import PhoneVerification from './Pages/PhoneVerification/PhoneVerification'; 
import Cart from './Pages/Cart/Cart';



function App() {
  return (
    <div className="App">
<Routes>

<Route path='/' element={<Login></Login>}/>
<Route path='/home' element={<Home></Home>  } />
<Route path='/emailverification' element={<EmailVerification></EmailVerification> } />
<Route path='/phoneverification' element={<PhoneVerification></PhoneVerification>} />
<Route path='/cart' element={<Cart></Cart>} />



</Routes>
    </div>
  );
}

export default App;
