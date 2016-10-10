var array=[];
window.addEventListener("load",function(){
    var mensaje = document.getElementById("mensaje");
    var chat = document.getElementById("chat");
    var conversacion = document.getElementById("conversacion");
    var mensajes = document.getElementById("mensajes");
    
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var p = document.createElement("p");
    var div3 = document.createElement("div");
    
    div1.classList.add("w-message-out");
    div2.classList.add("w-message-text");
    div3.classList.add("time");
    
    conversacion.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(div3);    
    
    mensajes.addEventListener("keyup", function(e){
        imprimirMensaje(e);
        horaMensajes();
        
    });
    
    function imprimirMensaje(e){
        var tecla = e.keyCode;
        var valorMensaje = mensajes.value;
        div2.innerText = mensajes;
        valorMensaje.insertBefore(div2);
        horaMensajes();
    }
    function horaMensajes(){
        var fecha = new Date();
        var hora = fecha.getHours();
        var min = fecha.getMinutes();
        div3.innerText = hora + ":" + min;
        mensajes.insertBefore(div3,mensajes.childNodes[0]);
    }
    
    
});