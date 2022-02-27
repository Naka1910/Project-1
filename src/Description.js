import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SimmilarProducts from "./SimmilarProducts";
import solgar1 from './solgar1.jpg'
import cardlogo from './cardlogo.svg'
import Counter from './Counter'


export default function Desctiption() {
  let params = useParams()
  let id=params.id;
  const [product, setProduct] = useState([]);
  function getData() {
    axios.get(`https://retoolapi.dev/FNoduP/products/${id}`)
      .then(response => {
        setProduct(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  useEffect(() => {
    getData();

  }, [])
  

  return (
    <div>
    <div className="Description-container">
    <img className="Descrip-img" src={product.image} alt={product.image} />
    <div className="Description-container-1">
    <p className="Descrip-tittle">{product.title}</p>
    <p className="Descrip-id">{product.id}</p>
    <p className="Description-desc">{product.description}</p>

    <div className="Descrip-cont2">
      <nav>
        <ul className="Dis-ul"> 
          <Link to ='/' className="Des-li Li-1">
          <li>-Brand name</li>
          </Link>
          <Link to ='/' className="Des-li">
          <li>-Country</li>
          </Link>
          <Link to ='/' className="Des-li">
          <li>-Preseption Yes/No</li>
          </Link>
          <Link to ='/' className="Des-li">
          <li>-Generic</li>
          </Link>
          <Link to ='/' className="Des-li">
          <li>-Quality</li> 
          </Link>
        </ul>
      </nav>
      <Counter/>
      <img className="small-solgar" src={solgar1} alt={solgar1} />
    </div>
    <div className='Descrip-line'></div>
    <div className='Descrip-last'>
   <div>
   <span>Price : 39,00</span>
    <span className='Descrip-span1'>(Old price : 39,00)</span>
   </div>
   <Link to='/basket'>
   <img src={cardlogo} alt={cardlogo}  />
   </Link>
    </div>
    </div>
    </div>
    <SimmilarProducts />
    </div>
  )
}