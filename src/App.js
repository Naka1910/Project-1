import './App.css';
import './reset.css'
import Header from './Header';
import Container from './Container';
import Products from './Products';
import Footer from './Footer';
import { Routes, Route, } from 'react-router-dom'
import Desctiption from './Description';



function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <Routes>
        <Route path='/Product/:id' element={<Desctiption />} />


      </Routes>

      <Products />
      <Footer />


    </div>
  );
}

export default App;
