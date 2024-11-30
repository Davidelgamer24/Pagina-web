function calcular(){
    let masa, estatura, imc, margin, consejo;

    masa = parseFloat(document.getElementById("masa").value);
    estatura = parseFloat(document.getElementById("estatura").value);

    if(masa <= 0 || estatura <= 0){
        imc = "Información invalida";
        margin = "10px"; // margen estándar
        consejo = "Ingresa una valor correcto";
        color = "black"; // color de texto estándar
    }else{
        imc = masa / (estatura * estatura);
        imc = imc.toFixed(3);

        if(imc > 40){
            margin = "50px";  // margen grande
            color = "red";    // rojo
            consejo = "Ten cuidado con tu salud";
        }else if (imc >= 35){
            margin = "40px";  // margen grande
            color = "orangered";   // naranja oscuro
            consejo = "Haz ejercicio";
        }else if (imc >= 30){
            margin = "30px";  // margen mediano
            color = "orange"; // naranja
            consejo = "No estás mal, pero tampoco bien";
        }else if (imc >= 25){
            margin = "20px";  // margen pequeño
            color = "yellow"; // amarillo
            consejo = "No estás mal";
        }else if (imc >= 18.5){
            margin = "10px";  // margen pequeño
            color = "green";  // verde
            consejo = "Estás bien";
        }else{
            margin = "5px";   // margen mínimo
            color = "blue";   // azul
            consejo = "Come mejor, por favor";
        }
    }

    document.getElementById("output").value = imc;
    document.getElementById("consejo").textContent = consejo;

    // Cambiar el margen y color del contenedor principal
    document.querySelector(".contenedor").style.margin = margin;
    document.querySelector(".contenedor").style.borderColor = color; // cambia el borde al color correspondiente
}
