var fn = {
    ready: function(){
        document.addEventListener('deviceready',fn.init,false);
    },
    init: function(){
        $('#regSend').click(fn.enviarRegistro);
        $('#regFoto').click(capture.imgCapture);
        if(!storage.estaRegistrado())
            window.location.href = '#reg';
    },
    enviarRegistro: function(){
        var nom = $('#regNom').val();
        var tel = $('#regTel').val();
        var mail = $('#regMail').val();
        var foto = $('#regFoto').attr('rel');
        
        if(nom != '' && tel != '' && mail != '' && foto != '' && foto != undefined){
            $.ajax({
                type: "POST",
                url: "http://carlos.igitsoft.com/apps/test.php",
                data: { nom: nom, mail: mail, tel: tel }
            })
            .done(function( msg ) {
                alert(1);
                if(msg == 1){
                    alert(2);
                    fileTransfer.subirFoto();
                }
            });
        }else{
            navigator.notification.alert('Todos los campos son requeridos',null,'Lo sentimos','Aceptar');
        }
    }
};

$(fn.ready);