import './App.scss';

import Menu from './components/Menu';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Lienhe from './components/Lienhe';

import End from './components/End';
import Home from './components/Home';
import Product from './components/Product';

const Lienhe1 = () => <Lienhe />;
const home = () => <Home />;
const product = () => <Product />;
function App() {
  return (
    
     
    <div className="App">
    <Menu /> 
    <Router>
        <Route path="/" exact  component = {home} />
         <Route path="/lienhe" component = {Lienhe1} />
         <Route path="/product" component = {product} />
    </Router>  
    <End />       
     
    </div>
    
  );
}

export default App;
