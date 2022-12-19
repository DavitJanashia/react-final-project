import React from "react";

import {getProducts, selectProduct} from '../slices/productSlice';
import {useDispatch, useSelector} from 'react-redux';
import cartService from "../services/cartService";
import {getCartItems} from '../slices/cartSlice';


function Home({cartProducts}) {
    const addedProds = cartProducts.map(({product_id}) => product_id)
    const {value: products, queryfilter: filter} = useSelector( selectProduct );
    const {addCart} = cartService()
    const dispatch = useDispatch()

    const addToCart = async (_product) => {
        await addCart(_product)
        dispatch(getCartItems())
    }


    React.useEffect(() => {
        dispatch(getProducts(filter))
    }, [filter])

    return (
        <div className="row row-cols-1 row-cols-md-6 row-cols-md-5 row-cols-sm-4 g-4 p-5">
                
            {
                products.map((_product) => {
                    return (
                        <div key={_product.id} className="col">
                            <div className="card p-2 h-100">
                            <div className="img_container">
                                <img src={_product.image} className="card-img-top rounded mh-100"/>
                            </div>
                            <div className="card-body">
                                <div className="card-title">{_product.title}</div>
                                <input className={addedProds.includes(_product.id)?"btn btn-outline-secondary":"btn btn-outline-secondary active"} type="button" value={!addedProds.includes(_product.id)?"Add to cart":"Product in cart"} onClick={()=>addToCart(_product)} disabled={addedProds.includes(_product.id)}/>
                            </div>
                        </div>
                    </div>
                        
                    )
                })
            }
        </div>
    )
}


export default Home;