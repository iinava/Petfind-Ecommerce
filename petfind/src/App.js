import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Uhome from './pages/User/uhome/Uhome';
import Ureg from './pages/User/ureg/Ureg';
import Log from './pages/Log';
import Sreg from './pages/Seller/Sreg';
import Seller from './pages/Seller/Seller';
import Guest from './pages/Guest';
import Buy from './pages/User/buy/Buy';
import Profe from './pages/User/Profe';
import Order from './pages/User/order/Order';
import Sedit from './pages/Seller/Sedit';
import Adhome from './pages/Admin/Adhome';
import Aproduct from './pages/Admin/Aproduct';
import Aorder from './pages/Admin/Aorder';
import Sorder from './pages/Seller/Sorder';
import Aseller from './pages/Admin/Aseller';
import Cart from './pages/User/cart/Cart';
import Vieww from './components/View/Vieww';

function App() {
  return (
   <>   <Routes>

   <Route path='/' element={<Guest/>}></Route>
   <Route path='/uhome' element={<Uhome/>}></Route>
   <Route path='/ureg' element={<Ureg/>}></Route>
   <Route path='/log' element={<Log/>}></Route>
   <Route path='/sreg' element={<Sreg/>}></Route>
   <Route path='/buy/:id' element={<Buy/>}></Route>
   <Route path='/shome' element={<Seller/>}></Route>
   <Route path='/editp' element={<Profe/>}></Route>
   <Route path='/order' element={<Order/>}></Route>
   <Route path='/sedit/:id' element={<Sedit/>}></Route>
   {/* <Route path="/sedit/:productId" component={Sedit} /> */}
   <Route path='/ahome' element={<Adhome/>}></Route>
   <Route path='/aproduct' element={<Aproduct/>}></Route>
   <Route path='/aorder' element={<Aorder/>}></Route>
   <Route path='/sorder' element={<Sorder/>}></Route>
   <Route path='/aseller' element={<Aseller/>}></Route>
   <Route path='/cart' element={<Cart/>}></Route>
   <Route path='/mister' element={<Vieww/>}></Route>
 

  







 </Routes>
</>
  );
}

export default App;
