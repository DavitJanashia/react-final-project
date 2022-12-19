import './App.css';
import React from "react";
import {useNavigate} from 'react-router-dom';
import NavBar from './components/NavBar'
import RoutesComponent from './components/RoutesComponent'
import {useDispatch, useSelector} from 'react-redux';
import {getCartItems, selectCart} from './slices/cartSlice';
import {getCategories, selectCategory} from './slices/categorySlice';
import {queryfilter} from './slices/productSlice';



function App() {
  const {value: cartProducts} = useSelector( selectCart );
  const {value: categories} = useSelector( selectCategory );
  const navigate = useNavigate();


  const dispatch = useDispatch()

  const searchProducts = (e) => {
    e.preventDefault()
    dispatch(queryfilter(e.target[0].value))
    navigate('/')
    e.target[0].value = ''
  }

  const resetQueryFilter = () => {
    dispatch(queryfilter(''))
  }

  const loadInfo = async () => {
    dispatch(getCartItems())
    dispatch(getCategories())
  }


  React.useEffect(() => {
    loadInfo();
  }, [])

  return (
    <div className="App">
      <header>
        <NavBar categories={categories} cartProducts={cartProducts} searchProducts={searchProducts} resetQueryFilter={resetQueryFilter}/>
      </header>
      <RoutesComponent categories={categories} cartProducts={cartProducts} />
    </div>
  );
}

export default App;