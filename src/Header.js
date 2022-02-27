import logo from './logo.svg'
import search from './search.svg'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>

      <div className="Header-container">
        <div className="Header-div1 Header-all ">
          <p className="Header-lng">EN</p>
          <button className="Header-btn">GE</button>
        </div>
        <div className="Header-div2 Header-all"></div>
        <div className="Header-div3 Header-all">
          < img className='Header-img' src={search} alt={search} />
          <p>Search</p>
          <div className='Header-spn'></div>
          <p className='Header-lgn'>Login/Register</p>
        </div>
      </div>
      <div className='Header-container2'>
        <div>
          <img src={logo} alt={logo} />
        </div>

        <nav className='Header-nav'>
          <ul className='Header-ul'>
            <li>
              <Link className='Header-lis' to='/Products'>
                Shop
              </Link>
            </li>
            <li>
              <Link className='Header-lis' to='/Products'>
              G-brands 
              </Link>
              </li>
              
            <li>
              <Link className='Header-lis' to='/Products'>
              G-box
              </Link>
              </li>
              
            <li>
              <Link className='Header-lis' to='/Products'>
              Ainzvai-Card
              </Link>
              </li>
              
            <li>
              <Link className='Header-lis' to='/Products'>
              Broches
              </Link>
              </li>
              
            <li>
            <Link className='Header-lis' to='/Products'>
              Deutche producte
            </Link>
            </li>
            <li>
              <Link className='Header-lis' to='/Products'>
              Blog
              </Link>
              </li>
          </ul>
        </nav>

      </div>
    </header>


  )
}