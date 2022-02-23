import arrow from './arrow.svg'
import str from "./str.svg"
export default function Container() {
  return (
    <div className="Container-div">

      <div>Home <img className="con-icon" src={str} alt={str} />
        Der shop <img className="con-icon" src={str} alt={str} />
        G - Brands</div>

      <div className='Container-div1'>
        <input type="naka" name="" id="" />
        <p>Sort by</p>
        <img src={arrow} alt={arrow} />
      </div>
      <div></div>
    </div>
  )
}