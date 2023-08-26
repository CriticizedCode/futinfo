import './lineaclas.css';
import React from 'react'

function Lineaclasificacion(props){
    console.log("ei")
    console.log(props)
    if(Object.keys(props?.clas).length===0){
        return <li>Cargando...</li>
    }else{
        if(props.num===0){
            return <li style={{textAlign:"left",height:"4.7%"}}><nombre class="nombre">{props.clas.equipo}</nombre><pts class="pts">{props.clas.puntos}</pts><pts class="pts">{props.clas.PJ}</pts><pts class="pts">{props.clas.PG}</pts><pts class="pts" >{props.clas.PE}</pts><pts class="pts">{props.clas.PP}</pts><pts class="pts">{props.clas.GF}</pts><pts class="pts">{props.clas.GC}</pts><pts class="pts">{props.clas.DG}</pts></li>;
        }else{
            return <li style={{textAlign:"left",height:"4.7%",backgroundColor:"#c3c3c3"}}><nombre class="nombre">{props.clas.equipo}</nombre><pts class="pts">{props.clas.puntos}</pts><pts class="pts">{props.clas.PJ}</pts><pts class="pts">{props.clas.PG}</pts><pts class="pts" >{props.clas.PE}</pts><pts class="pts">{props.clas.PP}</pts><pts class="pts">{props.clas.GF}</pts><pts class="pts">{props.clas.GC}</pts><pts class="pts">{props.clas.DG}</pts></li>;
        }
        
    }
}

export default Lineaclasificacion;