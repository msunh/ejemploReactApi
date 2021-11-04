import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import { Fragment,useState } from 'react'; //importo Fragment y states
import './App.css';
import Bebida from './components/Bebida';

function App() {

  //creo un state para las bebidas, arranca vacio
  //las bebidas vienen en formato json
  const [bebidaDesdeApi,setBebida] = useState({});

  //creo la funcion que consulta a la API y trae el resultado
  const consultarAPI = async () => {
    try {
      const api = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const bebida = await api.json(); //hago un parse a json
      setBebida(bebida.drinks[0]);
      
    } catch (error) {
      console.log(error);
    }
  } 

  return (
    <Fragment>
      <div style={
        {
          padding:"100px",
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
        }
      }
      >

        <Button variant= "warning "className="btn btn-outline-success" onClick={consultarAPI} >
          traer Bebida random
        </Button>
        <br></br>
        
        <Bebida bebidaProp={bebidaDesdeApi} />
      
      </div>       

    </Fragment>

  );
}

export default App;
