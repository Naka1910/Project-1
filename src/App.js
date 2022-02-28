import './App.css';
import './reset.css'
import Header from './Header';
import Container from './Container';
import Products from './Products';
import Footer from './Footer';
import { Routes, Route, Link } from 'react-router-dom'
import Desctiption from './Description';
import Basket from './Basket';



function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/:id' element={<Desctiption />} />
        <Route path='/basket' element={<Basket />} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
