import './imagenes.css';
export default function Imagenes(props){
    console.log(props.noticias[0])
    if(props.noticias[0]?.title?.length>60){
        console.log(props.noticias[0].title.substring(60,props.noticias[0]?.title?.length-60))
        props.noticias[0].title=props.noticias[0].title.substring(0,40)+'...'
        console.log(props.noticias[0].title)
    }
    if(props.noticias[1]?.title?.length>60){
        console.log("suu")
        props.noticias[1].title=props.noticias[1].title.substring(0,40)+'...'
    }
    return(
        <ul>
            <li style={{width:"260px",margin:"30px auto",paddingTop:"15px",backgroundColor:"#272727"}}>
                <a href={props?.noticias[0]?.source}>
                    <img src={props?.noticias[0]?.imagelink} style={{width: "230px", height: "230px"}} alt="Noticia 2"/>
                    <p class="letrablanca" >{props?.noticias[0]?.title}</p>
                </a>
            </li>
            <li style={{width:"260px",margin:"100px auto",paddingTop:"15px",backgroundColor:"#272727"}}>
                <a href={props?.noticias[1]?.source}>
                    <img src={props?.noticias[1]?.imagelink} style={{width: "230px", height: "230px"}} alt="Noticia 2"/>
                    <p class="letrablanca">{props?.noticias[1]?.title}</p>
                </a>
            </li>
        </ul>
    )
}