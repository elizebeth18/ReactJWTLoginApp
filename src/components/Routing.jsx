import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Outlet from './Outlet';
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
                <Routes>
                    <Route path='/' element={<Outlet/>}>
                        <Route index element={<Login/>} />
                        <Route path='/profile' element={<Profile/>} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
                
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Routing;