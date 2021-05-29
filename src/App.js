import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario'

function App() {
  const [citas, guardarCitas] = useState([]);

  //Funcion que tome las citas actuales y agreges las nuevas.
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  return (
    <div className="App">
      <Fragment>
        <h1>Administrador de pacientes.</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario crearCita={crearCita} />
            </div>
            <div className="one-half column">
              
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
