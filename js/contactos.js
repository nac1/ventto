var contactos = {
   
    creado: function(){
        alert('Contacto ');
        
    },
    /*error: function(err){
        alert(err.code);
    },
    guardar: function(){
        //Nombre
        var nombre = new ContactName();
        nombre.givenName = contactos.nombre;
        nombre.familyName = 'Prueba';
        //Teléfonos
        var telefonos = [];
        telefonos[0] = new ContactField('home','1234567890',false);
        telefonos[1] = new ContactField('mobile',contactos.telefono,true);
        //Correos
        var correos = [];
        correos[0] = new ContactField('home',contactos.correo,true);
        correos[1] = new ContactField('work','correo@trabajo.com',false);
        
        var contact = navigator.contacts.create();
        contact.displayName = contactos.nombre;
        contact.nickname = contactos.nombre;
        contact.name = nombre;
        contact.phoneNumbers = telefonos;
        contact.emails = correos;
        
        contact.save(contactos.creado,contactos.error);
    }*/
};