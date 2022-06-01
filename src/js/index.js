//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

function ContadorSimple(props) {
	return (
		<div className="barra">
			<div className="reloj">
				<i className="fa-solid fa-clock"></i>
			</div>
			<div className="cuatro">{props.digitoCuatro}</div>
			<div className="tres">{props.digitoTres}</div>
			<div className="dos">{props.digitoDos}</div>
			<div className="uno">{props.digitoUno}</div>
		</div>
	);
}
ContadorSimple.propTypes = {
	digitoCuatro: PropTypes.number,
	digitoTres: PropTypes.number,
	digitoDos: PropTypes.number,
	digitoUno: PropTypes.number,
};

let contador = 0;
setInterval(function () {
	const cuatro = Math.floor(contador / 1000);
	const tres = Math.floor(contador / 100);
	const dos = Math.floor(contador / 10);
	const uno = Math.floor(contador / 1);
	console.log(cuatro, tres, dos, uno);
	//render your react application
	contador++;
	ReactDOM.render(
		<ContadorSimple
			digitoUno={uno % 10}
			digitoDos={dos % 10}
			digitoTres={tres % 10}
			digitoCuatro={cuatro % 10}
		/>,
		document.querySelector("#app")
	);
}, 1000);
