<?php
	if(isset($_POST['json'])){
		$json = json_decode($_POST['json']);
		echo "El idIns es: ".$json->type.",<br>su Latitud es: ".$json->lat."<br>su Longitud es: ".$json->lng.".<br>su telefono es : ".$json->phone.",<br><br> Mientras procesamos su solicitud ayudenos a tipificar su incidencia, llenando el formulario a continuacion";
		// echo "Mientras procesamos su solicitud ayudenos a tipificar su incidencia, llenando el formulario a continuacion";
	} else {
		echo "no fue post";
	}
?>