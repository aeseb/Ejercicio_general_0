// Esta función suma la cantidad de productos que forman el carrito.
function sumarProductos() {
    let producto1 = parseInt(document.querySelector("#input_uno").value);
    let producto2 = parseInt(document.querySelector("#input_dos").value);
    let producto3 = parseInt(document.querySelector("#input_tres").value);
    let resultado = producto1 + producto2 + producto3;  
    document.querySelector("#h4_cant_productos").innerHTML = `${resultado}`;
}

document.querySelector("#item1").innerHTML = `
    <input type="checkbox" id="#casilla1">Tarjeta<br>
    <input type="checkbox" id="#casilla2">Efectivo<br>`;

/**
 * 
 * Intenté crear un evento que reconociera un chequed pero no 
 * tuve éxito. Mi intención fué que al detectarse el evento
 * se desplegaran otros checkboxs con las opciones de 1,
 * 3 y 6 cuotas.
 */
function comprobarChecks(event){
    let checkbox = document.getElementById("#casilla1");
        
    if(checkbox.checked){
        document.querySelector("#cuotas").innerHTML = `
            <input type="checkbox" id="a">1 Cuota<br>
            <input type="checkbox" id="b">2 Cuotas<br>
            <input type="checkbox" id="c">3 Cuotas<br>`;
    }  
}
   
    




