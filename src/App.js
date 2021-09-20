/* import logo from './logo.svg'; */
import './App.css';
import React, { useState } from "react";  /* importamos para el useState */
import html2canvas from "html2canvas";

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento){    
    setLinea1(evento.target.value);
  }

  const onChangeLinea2 = function(evento){    
    setLinea2(evento.target.value);
  }

  const onChangeImage = function(evento){    
    setImagen(evento.target.value);
  }

  const onClickExportar = function(evento){    
    html2canvas(document.querySelector("#memeexp")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png' 
      link.href = img;
      link.click();
    });
  }


  return (
    <div className="App">
      
      {/* Select picker de memes */}
      <select onChange={onChangeImage}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosiraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />

       {/* Input Text - primera linea */}
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"></input> <br />

      {/* Input Text - segunda linea */}
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2"></input> <br />

      {/* boton exportar se respeta el camellCase */}
      <button onClick={onClickExportar}>Exportar</button>

      {/* en reactjs el class para css se llama className xq class es una palabra reservada para ellos*/}
      <div className="meme" id="memeexp">
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src={"/img/"+ imagen + ".jpg"} alt=""></img>
        
      </div>

    </div>
  );
}

export default App;
