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
    </div>
  );
}

export default App;
