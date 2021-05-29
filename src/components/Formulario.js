import React, {Fragment, useState} from 'react';

const Formulario = () => {
    //Creando el State de las citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //Funcion que se ejecuta cada vez que el usuario escribe en un input.
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            <form action="">
                <label htmlFor="">Nombre mascota</label>
                <input 
                    type="text" 
                    name="mascota" 
                    className="u-full-width" 
                    placeholder="Nombre mascota" 
                    onChange={actualizarState} 
                    value={mascota}
                />

                <label htmlFor="">Nombre dueño</label>
                <input 
                    type="text" 
                    name="propietario" 
                    className="u-full-width" 
                    placeholder="Nombre dueño de la mascota" 
                    onChange={actualizarState} 
                    value={propietario}
                />

                <label htmlFor="">Fecha</label>
                <input 
                    type="date" 
                    name="fecha" 
                    className="u-full-width" 
                    onChange={actualizarState} 
                    value={fecha}
                />

                <label htmlFor="">Hora</label>
                <input 
                    type="time" 
                    name="hora" 
                    className="u-full-width" 
                    onChange={actualizarState}
                    value={hora} 
                />

                <label htmlFor="">Sintomas</label>
                <textarea 
                    name="sintomas" 
                    className="u-full-width" 
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button type="submit" className="u-full-width button-primary">Agregar cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;