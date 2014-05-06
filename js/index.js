$('.btn-home').click(function(event){
	event.preventDefault();
	var id = $(this).attr("id");
	var lat, lng;
	navigator.geolocation.getCurrentPosition(function(position)
	{ 
	    lat = position.coords.latitude;
	    lng = position.coords.longitude;

	    switch(id){
			case 'policia':
				var jsonData = JSON.stringify({"type": "1", "lat": lat, "lng": lng, "phone":"04127305740" });
			break;	
			case 'ambulancia':
				var jsonData = JSON.stringify({"type": "2", "lat": lat, "lng": lng, "phone":"04127305740"  });
			break;	
			case 'mecanico':
				var jsonData = JSON.stringify({"type": "3", "lat": lat, "lng": lng, "phone":"04127305740"  });
			break;	
			case 'bombero':
				var jsonData = JSON.stringify({"type": "4", "lat": lat, "lng": lng, "phone":"04127305740"  });
			break;
		};	
		$.ajax({
			type: "POST",
			url: 'http://192.168.1.139/our_mapper/assets/api.php',
			//url: 'index.php',
			crossDomain:true,             
        	async: true,
			data:'json='+jsonData ,
			success: function( data ) {    
			alert(data);         			
				//$('#respuestaServidor').html(data);
				//$('#formulario').append($('#form1'));
				//$.mobile.changePage( "#popupDialog", { role: "dialog" });
			}
		});
	});
});

$(document).on('click', '#submit', function() { 
	alert('se envio el formulario');
    $.ajax({
    	url: 'http://192.168.1.139/our_mapper/assets/api.php',
		crossDomain:true,
        data: {action : 'sendDatos', formData : $('#masDatos').serialize()}, // Convert a form to a JSON string representation
        type: 'post',                   
        async: true,
        beforeSend: function() {
            // This callback function will trigger before data is sent
            $.mobile.showPageLoadingMsg(true); // This will show ajax spinner
        },
        complete: function() {
            // This callback function will trigger on data sent/received complete
            $.mobile.hidePageLoadingMsg(); // This will hide ajax spinner
        },
        success: function (result) {
                resultObject.formSubmitionResult = result;
                            $.mobile.changePage("#second");
        },
        error: function (request,error) {
            // This callback function will trigger on unsuccessful action                
            alert('Network error has occurred please try again!');
        }
    });                   
               
    return false; // cancel original event to prevent form submitting
}); 