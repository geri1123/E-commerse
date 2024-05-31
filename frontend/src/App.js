
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router  , Route  , Switch} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';


function App() {
  return (
    
    <Router>
     <div className="App">
       <Navbar/>
      <div className='content' >
      
      
      

       <Switch>
          <Route exact path='/'>
          <Shop/>
            </Route>
            <Route path='/mens'>
          <ShopCategory banner={men_banner} category="men"/>
            </Route>
            <Route path='/womans'>
          <ShopCategory banner={women_banner} category="women"/>
            </Route>
           <Route path='/kids'>
          <ShopCategory banner={kid_banner} category="kid"/>
            </Route>
          <Route path="/product/:productId" >
          <Product/>
          </Route>
            

            


<Route path='/cart' >
<Cart/>
</Route>
<Route path='/login'>
  <LoginSignup/>
</Route>
      </Switch>
      <Footer/>
   
   
    </div>
    </div>
    </Router>
  );
}

export default App;
