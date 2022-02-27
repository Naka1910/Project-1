import you from './you.svg'
import instagram from './instagram.svg'
import fb from './fb.svg'
import line from './line.svg'
import message from './message.svg';
import phone from './phone.svg';
export default function Footer() {
  return (
    <footer className="Footer-container">
      <div className='Footer-container1'>
        <div className="Footer-container2">
          <h1 className='Footer-title'>Need to know more about our product?</h1>
          <div className="Footer-line"></div>
          <div className='Footer-icon' >
            <img src={message} alt={message} />
            <p className='Footer-txt'>info@dpharmacy.ge</p>
          </div>
          <div className='Footer-icon'>
            <img src={phone} alt={phone} />
            <p className='Footer-txt'>+995 577 11 08 08</p>
          </div>
        </div>
        <div className='Footer-container3'>
          <h2 className='Footer-title-1'>Site map</h2>
          <div><img src={line} alt={line} /></div>
          <nav className='Footer-nav'>
            <ul className='Footer-ul'>
              <li>Production</li>
              <li>G-brands</li>
              <li>G-box</li>
              <li>Branches</li>
              <li>About Us</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='Footer-container4'>
        <div className='Footer-container5'>
          <p className='Footer-text'>Terms @ Conditions</p>
          <div className='Footer-container6'>
            <p className='Footer-text1'>Follow Us</p>
            <div>
              <img src={you} alt={you} />
              <img className='instagram' src={instagram} alt={instagram} />
              <img src={fb} alt={fb} />
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
