import React from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBInput
}
    from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <MDBContainer fluid className="p-3 my-5">
            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                </MDBCol>

                <MDBCol col='4' md='6'>

                    <MDBInput wrapperClass='mb-4' label='Correo electrónico' id='formControlLg' type='email' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Contraseña' id='formControlLg' type='password' size="lg" />

                    <Link to='/dashboard'>
                        <MDBBtn className="mb-4 w-100" size="lg">Iniciar Sesión</MDBBtn>
                    </Link>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Login;