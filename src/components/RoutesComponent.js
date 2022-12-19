import Home from '../views/Home';
import Cart from '../views/Cart';
import Category from '../views/Category'
import {Routes, Route} from 'react-router-dom';

function RoutesComponent({categories, cartProducts}) {
    return (
        <Routes>
                <Route path='/' element={ <Home cartProducts={cartProducts}/> } />
                {
                categories.map((category) => {
                    return (
                        <Route key={category.id} path={"/"+category.name} element={ <Category category={category} cartProducts={cartProducts}/> } >{category.name}</Route>
                    )
                })
                }
            <Route path='/cart'element={ <Cart cartProducts={cartProducts} /> } />

        </Routes>
    )
}

export default RoutesComponent;