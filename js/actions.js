var fn = {
    ready: function(){
     //agregar al final
         document.addEventListener('deviceready',fn.init,false);
        
    },
    init: function(){   
        $('#contact').tap(fn.agregar_contacto);
        
       // $('#regSend').click(fn.enviarRegistro);
    //    $('#regFoto').click(capture.imgCapture);
        
        
        
        /*if(!storage.estaRegistrado())
            window.location.href = '#reg';*/
    },
    agregar_contacto:function(){
    contactos.creado();
   }

};

$(fn.ready);