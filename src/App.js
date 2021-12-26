
import './App.css';
import Error from './pages/404';
import Navbar from './commponents/menu/menu';
import MainPage from './pages/mainPage';
import Sucess from './pages/sucess';
import ManageCards from './pages/manageCards';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" exact element={<MainPage/>}/>
        <Route path="/manage-cards" element={<ManageCards/>} />
        <Route path="/manage-cards/:id" element={<ManageCards/>}/> 
        <Route path="/sucess" element={<Sucess/>}/> 
        <Route path="/*" element={<Error/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
