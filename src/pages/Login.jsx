import { useContext, useState } from "react";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBInput
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthProvider";

function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get("username");
        const password = formData.get("password");

        try {
            await login(username, password);
            navigate("/dashboard");
        } catch (e) {
            console.log(e);
            setForm({});
        }
    };

    return (
        <MDBContainer fluid className="p-3 my-5">
            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                </MDBCol>

                <MDBCol col='4' md='6'>

                    <form onSubmit={handleSubmit}>
                        <MDBInput wrapperClass='mb-4' label='Usuario' id='formControlLg' type='email' name='username' size="lg" value={form.username} onChange={handleChange} />
                        <MDBInput wrapperClass='mb-4' label='Contraseña' id='formControlLg' type='password' name='password' size="lg" value={form.password} onChange={handleChange} />

                        <MDBBtn type='submit' className="mb-4 bg-blue-500" size="lg">Iniciar Sesión</MDBBtn>
                    </form>

                </MDBCol>


            </MDBRow>

        </MDBContainer>
    );
}

export default Login;