import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MainOutlet from './Outlet';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import UserList from './UserList';

const NotFound = () => <h2>Page Not Found</h2>

const Routing = () => {
    return(
        <>
            <BrowserRouter>
                <Header/>
                <Login />
                <Profile />
                <Register />
                <UserList />
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Routing;