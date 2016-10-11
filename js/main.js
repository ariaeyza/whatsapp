window.addEventListener("load",function(){
    var mensajes = document.getElementById("mensajes");
    
    function imprimirMensaje(e){
        var conversacion = document.getElementById("conversacion");
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var p = document.createElement("p");

        div1.classList.add("w-massage","w-message-out");
        div2.classList.add("w-message-text");
        div3.classList.add("time");

        conversacion.appendChild(div1);
        div1.appendChild(div2);
        div2.appendChild(p);
        div2.appendChild(div3);
        
        var valorMensajes = mensajes.value;
        p.innerText = valorMensajes;
        
        var tiempo = new Date();
        var hora = tiempo.getHours();
        var minuto = tiempo.getMinutes();
        var horaMin = hora+":"+minuto;
        div3.innerHTML = horaMin;
        conversacion.appendChild(tiempo);
    }
    
    mensajes.addEventListener("keyup", function(e){
        var tecla = e.keyCode
        if (tecla == 13){
            imprimirMensaje(e);
        }
    });
    
});