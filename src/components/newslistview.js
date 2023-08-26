import NewItem from "./news";
import './newslistview.css';
export default function NewsView(props){
    return(
            <ul>
                {
                    props.noticias.map(function(noticias){
                        return <NewItem noticias={noticias}/>
                    })
                }
            </ul>
    )
}
//props.noticias.map(noticias=> <NewItem noticias={noticias}/>)