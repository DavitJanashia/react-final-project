import React from "react";
import {useDispatch} from 'react-redux';
import {getCartItems} from '../slices/cartSlice';
import cartService from "../services/cartService";

function Cart({cartProducts}) {
    const {updateCartItem, deleteCartItem} = cartService()
    const dispatch = useDispatch()
    const addQty = async (e, _product) => {
        const newQty = e.target.value
        if (newQty <= 0) {
            await deleteCartItem(_product.id)
        } else {
            const product = {
                ..._product,
                qty: newQty
            }
            await updateCartItem(product)
        }
        dispatch(getCartItems())
    }

    const delFromCart = async (id) => {
        await deleteCartItem(id)
        dispatch(getCartItems())
    }

  React.useEffect(() => {
    dispatch(getCartItems())
}, [])


    return (
        <>
        <div className="p-5">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Delete</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartProducts.map((_product)=>{
                            return (
                                <tr className="element" key={_product.id}>
                                    <td className="button-box">
                                        <button className="btn btn-outline-danger" onClick={()=> delFromCart(_product.id)}>Delete</button>
                                    </td>
                                    <td className="d-flex justify-content-center align-items-center"><img src={_product.image} className="cart-img"/></td>
                                    <td><strong>{_product.title}</strong></td>
                                    <td>{_product.price}</td>
                                    <td>
                                        <form > 
                                            <input type="number" min="0" value={_product.qty} onChange={(e)=>addQty(e, _product)}/>
                                        </form>
                                    </td>
                                    <td>{(_product.price * _product.qty).toFixed(2)}</td>
                                </tr>
                            )
                            
                        })
                    }

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{cartProducts.reduce((tot, product) => tot + (product.price * product.qty), 0).toFixed(2)}</td>
                        </tr>
                </tbody>
            </table>
        </div>
                    
        
        </>
    )

}

export default Cart;