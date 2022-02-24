import search from './search.svg'
import arrow from './arrow.svg'
import str from "./str.svg"
export default function Container() {
  return (
    <div className="Container-div">

      <div className='Container-div1'>
        <p className='Container-text1'>Home</p>
        <img className="con-icon" src={str} alt={str} />
        <p className='Container-text2'>Der shop</p>
        <img className="con-icon" src={str} alt={str} />
        <p className='Container-text3'>G - Brands</p>
      </div>

      <div className='Container-div2'>
        <div>
          <input className='Container-input' type="text" placeholder='Search' />

          <img src={search} alt={search} />
        </div>
        <p>Sort by</p>
        <img className='Container-arrow' src={arrow} alt={arrow} />
      </div>
      <div></div>
    </div>
  )
}