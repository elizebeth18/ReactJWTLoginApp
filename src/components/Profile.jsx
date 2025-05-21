import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const base_url = import.meta.env.VITE_API_URL;

const Profile = () => {

    const navigate = useNavigate();
    const [user,setUser] = useState();

    const userData = async() => {
        const response = await fetch(`${base_url}/userinfo`,{
            method: 'GET',
            headers: {
                'x-access-token': sessionStorage.getItem('ltk')
            }
        })

        const data = await response.json();
        setUser(data);
    }

    const renderUser = (data) => {
        if(data){
            sessionStorage.setItem('rtk', data.role);
            return(
                <>
                    <h1>Hi {data.name}</h1>
                    <h2>Your Email is {data.email}</h2>
                    <h2>Your phone number is {data.phone}</h2>
                    <h2>Your role is {data.role}</h2>
                </>
            )
        }
    }

    const logout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('rtk');
        navigate('/');
    }

    const conditionalRender = (data) => {
        if(data?.role?.toLowerCase() === 'admin'){
            return(
                <Link to="/users" className="btn btn-warning">
                    Users
                </Link>
            )
        }
    }

    useEffect(() => {
        userData();
    },[]);

    if(sessionStorage.getItem('ltk')===null){
        navigate('/');
    }else{
        return(
            <>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Profile</h3>
                    </div>
                    <div className="panel-body">
                        {renderUser(user)}
                        {conditionalRender(user)} &nbsp;
                        <button className="btn btn-danger"
                            onClick={logout}>
                            Logout
                        </button>
                    </div>
                </div>
            </>
        )
    }

    
}

export default Profile;