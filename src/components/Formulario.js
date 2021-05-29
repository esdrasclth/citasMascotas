import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {
    //Creando el State de las citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);

    //Funcion que se ejecuta cada vez que el usuario escribe en un input.
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //Cuando el usuario preciona agregar cita
    const submitCita = e => {
        e.preventDefault();
        
        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }

        //Eliminar el mensaje previo
        actualizarError(false); 

        //Asignar un ID
        cita.id = uuidv4();

        //Crear la cita
        crearCita(cita)
        
        //Reiniciar en form
    }

    return ( 
        <Fragment>
            <h2>Crear cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form onSubmit={submitCita}>
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