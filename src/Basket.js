import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Counter from "./Counter";

export default function Basket(){
    let params = useParams()
    let id=params.id;
    const [product, setProduct] = useState([]);
    function getData() {
      axios.get(`https://retoolapi.dev/FNoduP/products/`)
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
    console.log(product)
    return(
        <div className="Basket-container">
            {
                 product.filter(item => item.id <6).map((product) => {
                    return (
                     
                        <div key={product.id} className='Basket-container1'  >
                           
                          <img className="Basket-img" src={product.image} alt={product.image} />
                          <div>
                          <p className="Basket-text">{product.description.slice(35,78)}</p>
                          <p className="Basket-price">{product.price}</p>
                          </div>
                          <div className="Basket-counter">
                              <Counter/>
                          </div>
                        </div>
                      
                    )
                  })
            }
        </div>
    )
}