window.addEventListener("load",function(){
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
        var tecla = e.keyCode
        if (tecla == 13){
            imprimirMensaje(e);
        }
    });
    
    function imprimirMensaje(e){
        var valorMensajes = mensajes.value;
        div2.innerText = valorMensajes;
        valorMensajes.insertBefore(div2);
    }    
});