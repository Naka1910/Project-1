import './App.css';
import './reset.css'
import Header from './Header';
import Container from './Container';
import Products from './Products';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <Products />
      <Footer />

      <input type="number" placeholder='Type Number' />
      <button> Change start value</button>
    </div>
  );
}

export default App;
