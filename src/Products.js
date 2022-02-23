import axios from "axios";
import { useEffect, useState } from "react"


export default function Products() {
  const [products, setProducts] = useState([]);
  function getData() {
    axios.get('https://retoolapi.dev/FNoduP/products')
      .then(response => {
        setProducts(response.data)
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
        products.map((item, index) => {
          return (
            <div className="prod-cont" key={index}>
              <img className="prod-img" src={item.image} alt={item.image} />
              <p className="prod-text">{item.description}</p>
              <p>{item.price}</p>

            </div>
          )
        })
      }
    </div>
  )
}