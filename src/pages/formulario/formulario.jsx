import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function Formulario() {

    const [txtNombres,setNombres] = useState("");
    const [txtApellidos,setApellidos] = useState("");
    const [txtRut,setRut] = useState("");
    const [txtDv,setDv] = useState("");
    const [txtDia,setDia] = useState("");
    const [txtMes,setMes] = useState("");
    const [txtAnio,setAnio] = useState("");
    const [txtCorreo,setCorreo] = useState("");
    const [txtTelefono,setTelefono] = useState("");
    const [txtDireccion,setDireccion] = useState("");




    return (
        <>
            <div className="container d-flex justify-content-center mt-3">
                <form>
                    <div className="row">
                        <div className="col-12 text-center mb-4">
                            <h1>FORMULARIO</h1>
                        </div>
                        <div className="col-6">
                            <Form.Label htmlFor="basic-url">Ingrese el/los Nombre(s)</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control   
                                    name='nombres'
                                    placeholder="Nombre(s)"
                                    aria-label="Nombre(s)"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>
                        <div className="col-6">
                            <Form.Label htmlFor="basic-url">Ingrese el/los Apellido(s)</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    name='apellidos'
                                    placeholder="Apellido(s)"
                                    aria-label="Apellido(s)"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>
                        <div className="col-6">
                            <Form.Label>RUT</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    name="rut"
                                    placeholder="12345678"
                                    aria-label="RUT"
                                />
                                <InputGroup.Text>-</InputGroup.Text>
                                <Form.Control
                                    name="dv"
                                    placeholder="K"
                                    aria-label="DV"
                                    maxLength={1}
                                    className="text-center"
                                    style={{ maxWidth: "70px" }}
                                />
                            </InputGroup>
                        </div>
                        <div className="col-6">
                            <Form.Label>Fecha Nacimiento</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="dia" placeholder="Día" className="text-center" aria-label="First name" />
                                <InputGroup.Text>/</InputGroup.Text>
                                <Form.Control name="mes" placeholder="Mes" className="text-center" aria-label="First name" />
                                <InputGroup.Text>/</InputGroup.Text>
                                <Form.Control name="anio" placeholder="Año" className="text-center" aria-label="First name" />
                            </InputGroup>
                        </div>
                        <div className="col-4">
                                <Form.Label>Correo</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    name='correo'
                                    placeholder="estudiante"
                                    aria-label="correo"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">@duocuc.cl</InputGroup.Text>
                            </InputGroup>
                        </div>
                        <div className="col-4">
                            <Form.Label>Telefono</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>+569</InputGroup.Text>
                                <Form.Control name="telefono" placeholder="12345678"  aria-label="First name" />
                            </InputGroup>
                        </div>
                        <div className="col-4">
                            <Form.Label>Direccion</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="direccion" placeholder="campeonodromo 35"  aria-label="First name" />
                            </InputGroup>
                        </div>
                        <div className="col-12">
                            <button className='btn btn-primary' type='submit'>Registrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Formulario;