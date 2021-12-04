import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import {BrowserRouter,Route,} from 'react-router-dom';
import SignUp from './Components/signup';
import Header from './Components/header'
import Createportfolio from './Components/Createportfolio';
import Addvideo from './Components/addVideo';
import ListVideos from './Components/listvideos';


function App() {
  return (
    <BrowserRouter>
    
      <Header></Header>
    
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/portfolio" component={Createportfolio}/>
      <Route path="/addvideo" component={Addvideo}/>
      <Route path="/listvideos" component={ListVideos}/>
    
    </BrowserRouter>
   
  );
}

export default App;
