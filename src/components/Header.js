import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPath } from '../redux/slice';

const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const path = useSelector(state => state.path.path);

    useEffect(() => {
        dispatch(setPath(location.pathname));
    }, [location.pathname, dispatch]);
    console.log("rendering header");
    return (
            <div className='ui container'>
                <h1 className='ui header' style={{marginTop: '10px'}}>Fake Shop</h1>
                <div className='ui secondary pointing menu'>
                    <Link key={'productList'} to='/' className={path === '/' ? 'active item' : 'item'} onClick={() => {dispatch(setPath('/'))}}>Product List</Link>
                    <Link key={'shippingCart'} to='/cart' className={path === '/cart' ? 'active item' : 'item'} onClick={() => {dispatch(setPath('/cart'))}}>Shopping Cart</Link>
                </div>
                <Outlet />
            </div>
       
    )
}

export default Header;