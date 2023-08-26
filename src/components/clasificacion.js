import Lineaclasificacion from "./lineaclas"
export default function Clasificaciontabla(props){
    console.log(props)
    console.log("aqui:")
    return(
        <ul>
            <li style={{textAlign:"left", backgroundColor:"#3d3d3d"}}><nombre class="nombre" style={{textAlign:"center",color:"white"}}>Nombre</nombre><pts class="pts" style={{color:"white"}}>Puntos</pts><pj class="pts" style={{color:"white"}}>PJ</pj><pg class="pts" style={{color:"white"}}>PG</pg><pg class="pts" style={{color:"white"}}>PE</pg><pg class="pts" style={{color:"white"}}>PP</pg><pg class="pts" style={{color:"white"}}>GE</pg><pg class="pts" style={{color:"white"}}>GC</pg><pg class="pts" style={{color:"white"}}>DG</pg></li>
            {
                props.clasif?.map(function(clas,index){
                    const num= index%2===0 ? 0:1;
                    return <Lineaclasificacion clas={clas} num={num}/>
                })
            }
        </ul>
    )
}