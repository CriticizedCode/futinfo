import React from 'react'
import './news.css';

function NewItem(props){
    //console.log(props.noticias)
    if(Object.keys(props?.noticias).length===0){
        return <li>Cargando...</li>
    }
    if (props.noticias.description!== null)
    {
        props.noticias.description=props.noticias.description?.substring(0,30)+"..."
        return(
            <div style={{margin:"15px 15px"}}>
                <a href={props.noticias.source} >
                    <span class="spanew"><tit>{props.noticias.title}</tit> | <desc>{props.noticias.description}&nbsp;&nbsp;&nbsp;&nbsp;<na style={{color:"blue"}}>{props.noticias.web}</na></desc></span>
                </a>
            </div>
        );
    }
    else{
        return(
            <div style={{margin:"15px 15px"}}>
                <a href={props.noticias.source} >
                    <span class="spanew"><tit>{props.noticias.title}</tit><desc>&nbsp;&nbsp;&nbsp;&nbsp;<na style={{color:"blue"}}>{props.noticias.web}</na></desc></span>
                </a>
            </div>
        );
    }
        
}

export default NewItem;