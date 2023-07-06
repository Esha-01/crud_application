import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
  <div className="container">

    <BrowserRouter>
      <Routes>
        <Route eaxct path="/" element={<Create/>}></Route>
        <Route eaxct path="/read" element={<Read/>}></Route>
        <Route eaxct path="/update" element={<Update/>}></Route>


      </Routes>
    </BrowserRouter>
  </div>

  );
}

export default App;
