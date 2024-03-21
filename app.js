function encriptar() {
    let entrada = document.getElementById('entrada-texto').value;
    let entradaArray = entrada.split(' ');
    let salidaArray = [];
    let palabraArray = [];
    
    for (let i=0; i<entradaArray.length; i++) {
        palabraArray = entradaArray[i].split('');
        
        for (let j=0; j<palabraArray.length; j++) {
            if (palabraArray[j] == 'a') palabraArray[j] = 'ai';
            if (palabraArray[j] == 'e') palabraArray[j] = 'enter';
            if (palabraArray[j] == 'i') palabraArray[j] = 'imes';
            if (palabraArray[j] == 'o') palabraArray[j] = 'ober';
            if (palabraArray[j] == 'u') palabraArray[j] = 'ufat';            
        }
        
        salidaArray[i] = palabraArray.join('');
    }
        
    let salidaString = salidaArray.join(' ');    
    document.querySelector('#salida-texto').value = salidaString;      
    
}


function desencriptar() {
    let entrada = document.getElementById('entrada-texto').value;
    let entradaArray = entrada.split(' ');
    let salidaArray = [];
    
    
    
    for (let i=0; i<entradaArray.length; i++) {
        salidaArray[i] = entradaArray[i].replaceAll('ai', 'a')
        //salidaArray[i] = entradaArray[i].replaceAll('imes', 'i');
        //salidaArray[i] = entradaArray[i].replaceAll('ober', 'o');
        //salidaArray[i] = entradaArray[i].replaceAll('ufat', 'u');          
    }


    for (let j=0; j<entradaArray.length; j++) {
        salidaArray[j] = entradaArray[j].replaceAll('enter', 'e');
    }
        
    let salidaString = salidaArray.join(' ');    
    document.querySelector('#salida-texto').value = salidaString;  

}




