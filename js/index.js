$(document).on('click', '.btn-home', function(event) { 
	event.preventDefault();
	var id = $(this).attr("id");
	var lat, lng, nombre, telefono, email;
	navigator.geolocation.getCurrentPosition(function(position)
	{ 
	    lat = position.coords.latitude;
	    lng = position.coords.longitude;
	    nombre = localStorage.nombre;
	    telefono = localStorage.telefono;
	    email = localStorage.email;
	    switch(id){
			case 'policia':
				var jsonData = JSON.stringify({"type": "1", "lat": lat, "lng": lng, "phone":telefono, "nombre":nombre, "email":email });
			break;	
			case 'ambulancia':
				var jsonData = JSON.stringify({"type": "2", "lat": lat, "lng": lng, "phone":telefono, "nombre":nombre, "email":email });
			break;	
			case 'mecanico':
				var jsonData = JSON.stringify({"type": "3", "lat": lat, "lng": lng, "phone":telefono, "nombre":nombre, "email":email });
			break;	
			case 'bombero':
				var jsonData = JSON.stringify({"type": "4", "lat": lat, "lng": lng, "phone":telefono, "nombre":nombre, "email":email });
			break;
		};	
		$.ajax({
			type: "POST",
			url: 'http://bithelion-mapper.jelastic.servint.net/mapper/assets/api.php',
			// url: 'index.php',
			data:'json='+jsonData ,
			success: function( data ) {				
				var obj = jQuery.parseJSON(data);
				var direccion = obj.direccion;
				var id 		= obj.id;
				$('#id').val(id);
				var mitexto = "El id de incidencia es "+id+" Ud esta ubicado en "+direccion+".";
				$('#respuestaServidor').html(mitexto);
				$('#formulario').append($('#form1'));
				$.mobile.changePage( "#popupDialog", {	rel: "dialog", 
					    								transition: "flip"
					    							});
			}
		});
	});
});

$(document).on('click', '#submit', function() { 
	//traemos los datos almacenados en local storage
    $.ajax({
    	 url: 'http://bithelion-mapper.jelastic.servint.net/mapper/assets/api.php',
    	//url: 'index.php',
		//crossDomain:true,
        type: 'post',    
        dataType: 'json',    
        data: $('form#masDatos').serialize(), 
        //async: true,
        success: function (data) {
        		// $('#popupDialog').dialog( "close" );
                $.mobile.changePage("#popupSendConfirm", {	rel: "dialog", 
		    										transition: "flip"
		    									});
        },
        error: function (request,error) {
            // This callback function will trigger on unsuccessful action                
            alert('Network error has occurred please try again!');
        }
    });                   
}); 

$(document).on('click', '#submit-personal-data', function() {     
    localStorage.nombre = $('#nombre').val();
    localStorage.telefono = $('#telefono').val();
    localStorage.email = $('#email').val();
    $.mobile.changePage("#popupConfirm", {	rel: "dialog", 
		    								transition: "flip"
		    							});
}); 

$(document).on('click', '#opt-configurar', function() {  
    $('#nombre').val(localStorage.nombre);
    $('#telefono').val(localStorage.telefono);
    $('#email').val(localStorage.email);
}); 


