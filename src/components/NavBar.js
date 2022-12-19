import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css';

function NavBar({categories, cartProducts, searchProducts, resetQueryFilter}) {
   
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><NavLink className="nav-link active" to="/" onClick={()=>resetQueryFilter()}>Home</NavLink></li>
                    {
                        categories.map((category) => {
                            return (
                                <li className="nav-item" key={category.id}><NavLink className="nav-link" to={"/"+category.name.toLowerCase()}>{category.name}</NavLink></li>
                            )
                        })
                    }
                </ul>
                <NavLink className="nav-link active me-3" to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i>({cartProducts.length})</NavLink>
                <form className="d-flex" onSubmit={event => searchProducts(event)}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </>
        





      
    )
}

export default NavBar



