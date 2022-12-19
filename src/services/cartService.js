import httpService from "./httpService";

function cartService() {
    const getCartProducts = async() => {
        return httpService.get('/cart')
    }

    const addCart = async(_product) => {
        let product = {
            product_id: _product.id,
            price: _product.price,
            title: _product.title,
            image: _product.image,
            qty: 1
          }
      
          httpService.add('/cart', product)
    }

    const updateCartItem = async(_product) => {
        await httpService.update('/cart/'+_product.id, _product)
    }

    const deleteCartItem = async(id) => {
       await httpService.del('/cart/'+id)
    }


    return ({
        getCartProducts,
        addCart,
        updateCartItem,
        deleteCartItem
    })
}


export default cartService;