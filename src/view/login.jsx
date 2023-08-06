import React from 'react'
import axios from '../apis/index.js';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [error, setError] = React.useState(null);

    const [login, setLogin] = React.useState({
        correo: "",
        contrasena: ""
    })

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!login.correo.trim()) {
            setError('El campo correo es obligatorio')
            return
        }
        if (!login.contrasena.trim()) {
            setError('El campo contraseña es obligatorio')
            return
        }

        await axios.post("/login/", login).then(response => {
            let token = response.data.token;
            localStorage.setItem('token', token);
            if(response.data.state === true){
                setLogin({ correo: "", contrasena: "" })
                setError(response.data.msg)
                navigate("/registro")
                
            }else{
                setError(response.data.msg)
            }
            
        })
    };

    const onInputChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    return (
        <div className='row justify-content-center'>
            <div className="col-12 col-sm-10 col-md-6 col-xl-4">
            {
                 error && (
                   <div className='alert alert-danger'>
                     {error}
                   </div>
                 )
               }

                <form onSubmit={handleSubmit}>
                    <input type="email"
                        className='form-control mb-3'
                        placeholder="Correo"
                        value={login.correo}
                        onChange={onInputChange}
                        name="correo"
                    />

                    <input type="password"
                         className='form-control mb-3'
                         placeholder="Contraseña"
                         value={login.contrasena}
                         onChange={onInputChange}
                         name="contrasena"
                    />

                    <div className='d-grid gap-2'>
                        <button className='btn btn-primary' type='submit'>Iniciar Session</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login