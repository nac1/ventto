var contactos = {
   
   creado: function(){
        alert('Contacto Guardado');
       
    },
    error: function(err){
        alert(err.code);
    },
    guardar: function(){
        //Nombre
        var nombre = new ContactName();
        nombre.givenName ='Fernado';
        nombre.familyName = 'Fernando';
        //Teléfonos
        var telefonos = [];
        telefonos[0] =  new ContactField('mobile','222238389',true);
        //Correos
        var correos = [];
        correos[0] = new ContactField('Work','fernando.g.galeatzi@gmail.com',true);
        
        var direccion=[];
        direccion[0]=new ContactField('address','km 15.5 carretera federal Atlixco cp 74325',true);
  
        var contact = navigator.contacts.create();
        contact.displayName = 'Fernado';
        contact.nickname = 'Fernado';
        contact.name = nombre;
        contact.phoneNumbers = telefonos;
        contact.emails = correos;
        contact.addresses=direccion;
        
        contact.save(contactos.creado,contactos.error);
    }
};