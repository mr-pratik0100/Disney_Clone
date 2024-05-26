import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div><Login /> </div>} />
          <Route path="/home" element={<div><Home /> </div>} />
          <Route path="/detail/:id" element={<div><Detail /> </div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
