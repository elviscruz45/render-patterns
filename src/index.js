import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App/index.js';
import './index.css';





ReactDOM.render(<App/>, document.getElementById("root"))








// ReactDOM.render(
//   <AppWithWhitSaludo  nombre="Juanita" />,
//   //App saludo="Buenas" nombre="Nath"/>,
//   document.getElementById('root')
// );

// function App(props){
//   return(
//     <h1> {props.saludo} , {props.nombre}!</h1>
//   )
// }

// function withSaludo(WrappedComponent){
//   return function WrappedComponentwithSaludo(saludo) {
//     return function ComponenteDeVerdad(props){
//       return (
//         <React.Fragment>
  
//           <WrappedComponent {...props} saludo={saludo}/>
//           <p>Estamos acompañando al WrappedComponent</p>
        
//         </React.Fragment>
//       )
//     }
//   }
// }

// const AppWithWhitSaludo=withSaludo(App)("Wenas")