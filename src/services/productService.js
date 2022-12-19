import httpService from "./httpService";

function productService() {
    const getProductsByCategory = async(category_id) => {
        return httpService.get(`/products?category_id=${category_id}`)
    }

    const getProds = async(url) => {
        return httpService.get(url)
    }

    return ({
        getProductsByCategory,
        getProds
    })
}


export default productService;