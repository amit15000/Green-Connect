import Home from "./Pages/Home";
import About from "./Pages/About Us";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/Create Account";
import ContactPage from "./Pages/Contact Us";
import Resources from "./Pages/Resources";
import Profile from "./Pages/Stakeholders Profile";
import Stakeholders from "./Pages/Stakeholders";
import PlantTrees from "./Pages/Plant Trees";
import Project from "./Pages/Project Directory";
import "./App.css";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="">
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
    <Route path="/createaccount" element={<CreateAccount/>}/>
    <Route path="/resources" element={<Resources/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/stakeholders" element={<Stakeholders/>}/>
    <Route path="/planttrees" element={<PlantTrees/>}/>
    <Route path="/projects" element={<Project/>}/>
  </Routes>
  </div>
  );
}

export default App;
