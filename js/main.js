window.addEventListener("load",function(){
    var mensaje = document.getElementById("mensaje");
    var hora = document.getElementById("hora");
    var chat = document.getElementById("chat");    
    var mensajes = document.getElementById("mensajes");
    var conversacion = document.getElementById("conversacion");
    
    function imprMensHora(e){
        var divPadre = document.createElement("div");
        var divHijo = document.createElement("div");
        var divTiempo = document.createElement("div");
        var pMensaje = document.createElement("p");

        divPadre.classList.add("w-message","w-message-out");
        divHijo.classList.add("w-message-text");
        divTiempo.classList.add("time");

        conversacion.appendChild(div1);
        divPadre.appendChild(divHijo);
        divHijo.appendChild(pMensaje);
        divHijo.appendChild(divTiempo);
        
        var valorMensajes = mensajes.value;
        pMensaje.innerText = valorMensajes;
        
        var tiempo = new Date();
        var hora = tiempo.getHours();
        var minuto = tiempo.getMinutes();
        var horaMin = hora+":"+minuto;
        divTiempo.innerHTML = horaMin;
        conversacion.appendChild(tiempo);
    }
    
    mensajes.addEventListener("keyup", function(e){
        var tecla = e.keyCode
        if (tecla == 13){
            imprMensHora(e);
        }
    });
    
});