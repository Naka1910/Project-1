import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import solgar from './solgar.jpg'


export default function Products() {
  const [product, setProduct] = useState([]);
  function getData() {
    axios.get('https://retoolapi.dev/FNoduP/products')
      .then(response => {
        setProduct(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="Main-prod-cont">
    <div className="Products-container">
      {
         product.filter(item => item.id <13).map((product) => {
          return (
            <Link to={`${product.id}`} key={product.id}>
              <div className="Prod-cont" >
                <img className="Prod-img" src={product.image} alt={product.image} />
                <p className="Prod-text">{product.description.slice(35,78)}</p>
                <p className="Prod-price">{product.price}</p>

              </div>
            </Link>
          )
        })
        }
         </div>
         <div className="Prod-solgar">
          <img className="solgar" src={solgar}alt={solgar} />
          </div>
     <div className="Products-container">
            {
         product.filter(item => item.id <9).map((product) => {
          return (
            <Link to={`/${product.id}`} key={product.id}>
              <div className="Prod-cont" >
                <img className="Prod-img" src={product.image} alt={product.image} />
                <p className="Prod-text">{product.description.slice(35,78)}</p>
                <p className="Prod-price">{product.price}</p>

              </div>
            </Link>
          )
        })
        
      }
      
    </div>
   
    </div>
  )
}