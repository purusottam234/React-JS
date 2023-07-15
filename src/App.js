import { HelpRounded } from '@mui/icons-material';
import './App.css';

import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/checkout' element={<><Header /><Checkout /></>}>
            
          </Route>
          <Route path='/' element={<><Header /><Home /></> }>
           
            
          </Route>
          <Route path='/login' element={<> <Login /></> }>
           
            
           </Route>
        </Routes>
      </Router>
     
      

      
      
    </div>
  );
}

export default App;
