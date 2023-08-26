import './App.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import NewsView from './components/newslistview';
import Imagenes from './components/imagenes';
import Clasificaciontabla from './components/clasificacion';
import barca from './images/barca.png';
import realmadrid from './images/realmadrid.png';
import atleticomadrid from './images/atleticomadrid.png';
import sevilla from './images/sevilla.png';
import barras from './images/barras.png';

function App() {

  const [noticias, setNoticias] = useState([{}])
  const [tablaclasificacion, setclasificacion] = useState([{}])
  //read news
  console.clear()
  var link= document.URL.toString().split("/");
  var extension=""
  var clasificacion= false
  console.log(link)
  if(link.length>4){
    extension="/"+link[3]+"/"+link[4]
  }else if(link.length===4){
    if(link[3]==="clasificacion"){
      clasificacion=true
      extension="/clasificacion"
    }
  }
  useEffect(() => {
    //console.log("esra eso");
    //http://192.168.0.12:6969/clasificacion
    //axios.get('http://192.168.0.12:6969'+extension).then(res=>{
    if(clasificacion){
      axios.get("https://fpgna34tg4inj2zyr3vqwyyxie0ujtka.lambda-url.eu-north-1.on.aws/clasificacion")
      .then((response) => {
        setclasificacion(response.data)
      })
    }else{
      axios.get('https://fpgna34tg4inj2zyr3vqwyyxie0ujtka.lambda-url.eu-north-1.on.aws/'+extension).then(res=>{
        setNoticias(res.data)
      });
    }
  },[clasificacion,extension]);
  if(clasificacion){
    if(tablaclasificacion.length>0){
      return(
        <html style={{margin:'0',padding:'0'}}>
        <body style={{margin:'0',padding:'0',backgroundColor:'black'}}>
          <ul>
            <li>
              <div class="banner"><a href="/" style={{margin:'0 auto'}}><center style={{margin:'0 auto',fontSize:'70px',color:"white",fontFamily:"Antonio",fontStyle:"italic"}}>FUTINFO</center></a></div>
            </li>
            <li>
              <div class="topnav">
                <a href="/equipo/barcelona"><img src={barca} class="fotos" alt="Noticias del F.C Barcelona" /></a>
                <a href="/equipo/real-madrid"><img src={realmadrid} class="fotos" alt="Noticias del Real Madrid C.F" /></a>
                <a href="/equipo/atletico"><img src={atleticomadrid} class="fotos" alt="Noticias del Cluv Atlético de Madrid" /></a>
                <a href="/equipo/sevilla"><img src={sevilla} class="fotos" alt="Noticias del Sevilla F.C" /></a>
                <div class="dropdown">
                  <div class="fotos-container">
                    <img src={barras} class="fotos" alt="Menú" />
                  </div>
                  <div class="dropdown-content vertical">
                    <span class="dropdown sizedrop equipos-text"><strong>EQUIPOS</strong></span>
                    <div class="equipos-dropdown">
                      <a href="/equipo/barcelona">FC Barcelona</a>
                      <a href="/equipo/real-madrid">Real Madrid CF</a>
                      <a href="/equipo/atletico">Atlético de Madrid</a>
                      <a href="/equipo/sevilla">Sevilla FC</a>
                      <a href="/equipo/real-sociedad">Real Sociedad</a>
                      <a href="/equipo/real-betis">Real Betis</a>
                      <a href="/equipo/villarreal">Villarreal CF</a>
                      <a href="/equipo/valencia">Valencia CF</a>
                      <a href="/equipo/granada">Granada FC</a>
                      <a href="/equipo/cadiz">Cadiz SF</a>
                      <a href="/equipo/athletic">Athletic Club de Bilbao</a>
                      <a href="/equipo/rayo-vallecano">Rayo Vallecano</a>
                      <a href="/equipo/deportivo-alaves">Deportivo Alavés</a>
                      <a href="/equipo/getafe">Getafe CF</a>
                      <a href="/equipo/celta-vigo">Real Club Celta de Vigo</a>
                      <a href="/equipo/osasuna">Osasuna</a>
                      <a href="/equipo/las-palmas">UD Las Palmas</a>
                      <a href="/equipo/mallorca">RCD Mallorca</a>
                      <a href="/equipo/almeria">UD Almeria</a>
                      <a href="/equipo/girona">Girona FC</a>
                    </div>
                    <a class="cuadro" href="/clasificacion" style={{width:"100%",height:"100px"}}><strong>CLASIFICACIÓN</strong></a>
                  </div>
                </div>
              </div>
            </li>
            <li style={{marginTop:'2%',padding:'0',minHeight:"600px"}}>
              <div style={{marginTop:'2%',padding:'0',minHeight:"400px"}}>
                <div class="lateralunoclas">ANUNCIOS</div>
                <div class="sepdos" style={{margin:"0",padding:"0"}}>
                  <Clasificaciontabla clasif={tablaclasificacion}/>
                </div>
                <div class="lateraldosclas">
                  ANUNCIOS
                </div>
              </div>
            </li>
            <li style={{textAlign:"center",minHeight:"200px"}}>
              ANUNCIOS
            </li>
          </ul>  
        </body>
      </html>
      );
    }
    
  }
  else{
    return (
      <html style={{margin:'0',padding:'0'}}>
        <body style={{margin:'0',padding:'0',backgroundColor:'black'}}>
          <ul>
            <li>
              <div class="banner"><a href="/" style={{margin:'0 auto'}}><center style={{margin:'0 auto',fontSize:'70px',color:"white",fontFamily:"Antonio",fontStyle:"italic"}}>FUTINFO</center></a></div>
            </li>
            <li>
              <div class="topnav">
                <a href="/equipo/barcelona"><img src={barca} class="fotos" alt="Noticias del F.C Barcelona" /></a>
                <a href="/equipo/real-madrid"><img src={realmadrid} class="fotos" alt="Noticias del Real Madrid C.F" /></a>
                <a href="/equipo/atletico"><img src={atleticomadrid} class="fotos" alt="Noticias del Cluv Atlético de Madrid" /></a>
                <a href="/equipo/sevilla"><img src={sevilla} class="fotos" alt="Noticias del Sevilla F.C" /></a>
                <div class="dropdown">
                  <div class="fotos-container">
                    <img src={barras} class="fotos" alt="Menú" />
                  </div>
                  <div class="dropdown-content vertical">
                    <span class="dropdown sizedrop equipos-text"><strong>EQUIPOS</strong></span>
                    <div class="equipos-dropdown">
                      <a href="/equipo/barcelona">FC Barcelona</a>
                      <a href="/equipo/real-madrid">Real Madrid CF</a>
                      <a href="/equipo/atletico">Atlético de Madrid</a>
                      <a href="/equipo/sevilla">Sevilla FC</a>
                      <a href="/equipo/real-sociedad">Real Sociedad</a>
                      <a href="/equipo/real-betis">Real Betis</a>
                      <a href="/equipo/villarreal">Villarreal CF</a>
                      <a href="/equipo/valencia">Valencia CF</a>
                      <a href="/equipo/granada">Granada FC</a>
                      <a href="/equipo/cadiz">Cadiz SF</a>
                      <a href="/equipo/athletic">Athletic Club de Bilbao</a>
                      <a href="/equipo/rayo-vallecano">Rayo Vallecano</a>
                      <a href="/equipo/deportivo-alaves">Deportivo Alavés</a>
                      <a href="/equipo/getafe">Getafe CF</a>
                      <a href="/equipo/celta-vigo">Real Club Celta de Vigo</a>
                      <a href="/equipo/osasuna">Osasuna</a>
                      <a href="/equipo/las-palmas">UD Las Palmas</a>
                      <a href="/equipo/mallorca">RCD Mallorca</a>
                      <a href="/equipo/almeria">UD Almeria</a>
                      <a href="/equipo/girona">Girona FC</a>
                    </div>
                    <a class="cuadro" href="/clasificacion" style={{width:"100%",height:"100px"}}><strong>CLASIFICACIÓN</strong></a>
                  </div>
                </div>
              </div>
            </li>
            <li style={{marginTop:'2%',padding:'0',minHeight:"1000px"}}>
              <div style={{marginTop:'2%',padding:'0',minHeight:"1000px"}}>
                <div class="lateraluno">ANUNCIOS</div>
                <div class="sep">
                  <NewsView noticias={noticias}/>
                </div>
                <div class="lateraldos">
                  ANUNCIOS
                  <Imagenes noticias={noticias}/>
                </div>
              </div>
            </li>
            <li style={{textAlign:"center",minHeight:"200px"}}>
            </li>
          </ul>
        </body>
      </html>
    );
  }
      
}

export default App;
