import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


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
    <div className="Products-container">
      {
        product.map((product) => {
          return (
            <Link to={`${product.id}`} key={product.id}>
              <div className="prod-cont" >
                <img className="prod-img" src={product.image} alt={product.image} />
                <p className="prod-text">{product.description}</p>
                <p className="Prod-price">{product.price}</p>

              </div>
            </Link>
          )
        })
      }
    </div>
  )
}