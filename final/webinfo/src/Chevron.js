import React from "react";
function Chevron(props){
    return(
        <svg className={props.className}
        height={props.height}
        width ={props.width}
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
            fill={props.fill}
        />
        </svg>
    );
}
export default Chevron;
