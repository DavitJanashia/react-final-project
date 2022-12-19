import httpService from "./httpService";

function categoryService() {
    const getCategories = async() => {
        return httpService.get('/categories')
    }

    return ({
        getCategories
    })
}


export default categoryService;