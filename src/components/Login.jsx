import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";

const base_url = import.meta.env.VITE_API_URL

const Login = () => {
    
    const emailRef = useRef();
    const passRef = useRef();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = {
            email: emailRef.current.value,
            password: passRef.current.value
        }

        fetch(`${base_url}/login`,{
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                setMessage(data.token)
            }else {
                sessionStorage.setItem('ltk',data.token);
                navigate('/profile');
            }
        })

    }

    return(
        <>
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3>Login User</h3>
                </div>
                <div className="panel-body">
                    <h2 style={{color: 'red'}}>{message}</h2>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>Email</label>
                            <input ref={emailRef} className="form-control" 
                            defaultValue="jilu.e@gmail.com" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Password</label>
                            <input ref={passRef} className="form-control" 
                            defaultValue="12345678" />
                        </div>
                    </div>
                    <button className="btn btn-info"
                    onClick={handleSubmit}>Login</button>
                </div>
            </div>
            

        </>
    )
}

export default Login;