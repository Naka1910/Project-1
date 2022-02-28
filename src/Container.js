import search from './search.svg'
import arrow from './arrow.svg'
import str from "./str.svg"
import { Link } from 'react-router-dom'
export default function Container() {
  return (
    <div className="Container-div">

      <div className='Container-div1'>
        <Link to='/'>
          <p className='Container-text1'>Home</p>
        </Link>
        <img className="con-icon" src={str} alt={str} />
        <Link to='/'>
          <p className='Container-text2'>Der shop</p>
        </Link>
        <img className="con-icon" src={str} alt={str} />
        <Link to='/'>
          <p className='Container-text3'>G - Brands</p>
        </Link>
      </div>

      <div className='Container-div2'>
        <div className='Cont-div'>
          <input className='Container-input' type="text" placeholder='Search' />
          <img className='Search-img' src={search} alt={search} />
        </div>
        <div className='Cont-div1'>
          <p>Sort by</p>
          <img className='Container-arrow' src={arrow} alt={arrow} />
        </div>

      </div>
      <div></div>
    </div>

  )
}