import './App.css';
import ContactDetails from './Components/contactDetails';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ContactList from './Components/contactList';



function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/ContactList" element={<ContactList/>}/>
      <Route path="/" element={<ContactList/>}/>
      <Route path="/ContactDetails/:id" element={<ContactDetails/>}/>
    </Routes>
    </Router>
      
    </>
  );
}

export default App;
