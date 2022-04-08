

var valorcont=0;



function clicaAqui(){
    valorcont += 1;
    document.getElementById("contadorval").innerHTML = valorcont;
}

function resetarAqui(){
    valorcont=-1;
    document.getElementById("conta").innerHTML = valorcont;
}

function contDiv(){
    valorcont += 1;
    document.getElementById("conta").innerHTML = valorcont;
}

function criaCont(){
    const nome = document.getElementById("nomeCont").value;
    const item = document.createElement('div');

    item.style.backgroundColor = corAleatoria();
    item.innerHTML =
    `
    <h3> ${nome}</h3>
    <h3 id="conta"> 0 </h3>
    <p > clique aqui! </p>
    <button onclick="resetarAqui()">zerar contador!</button>`;

    item.classList.add('novadiv');
    item.onclick=clicaAqui();
    document.getElementById('pai').appendChild(item);
    
}

function corAleatoria(){
    
        let r = parseInt(Math.random() * 255);
        let g = parseInt(Math.random() * 255);
        let b = parseInt(Math.random() * 255);
        
        return `rgb(${r}, ${g}, ${b})`;
     
}


