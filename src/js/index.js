//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types"
// include your styles into the webpack bundle
import "../styles/index.css";

function Contador(props){
    
    return (
        <div>
            <li className="reloj fs-18">
                <i class="far fa-clock"></i>
    
            </li>
            <li className="cinco">
            {props.digitcinco %10}
            </li>
            <li className="cuatro">
            {props.digitcuatro %10}
            </li>
            <li className="tres">
            {props.digittres %10}
            </li>
            <li className="dos">
            {props.digitdos %10}
            </li>
            <li className="uno">
            {props.digituno %10}
            </li>
        </div>);}
        Contador.propTypes = {
            digitcinco: propTypes.number,
            digitcuatro: propTypes.number,
            digittres: propTypes.number,
            digitdos: propTypes.number,
            digituno: propTypes.number,
        };

    let counter = 0
    setInterval(function(){
        const cinco = Math.floor(counter/10000)
        const cuatro = Math.floor(counter/1000)
        const tres = Math.floor(counter/100)
        const dos = Math.floor(counter/10)
        const uno = Math.floor(counter/1)
        console.log(cinco,cuatro,tres,dos,uno);       
        counter++;
        ReactDOM.render(
            <Contador digituno={uno}digitdos={dos}digittres={tres}digitcuatro={cuatro}digitcinco={cinco}/>,
            document.querySelector('#app')
        )
    },1000);
    
//import your own components
import Home from "./component/home.jsx";

//render your react application

