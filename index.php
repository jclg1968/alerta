<?php
	if(isset($_POST['json'])){
		$json = json_decode($_POST['json']);
		// echo "El Numero de Incidencia es: ".$json->type.",<br>su Latitud es: ".$json->lat."<br>su Longitud es: ".$json->lng.".<br>su telefono es : ".$json->phone.",<br><br> Mientras procesamos su solicitud ayudenos a tipificar su incidencia, llenando el formulario a continuacion";
		// echo "Mientras procesamos su solicitud ayudenos a tipificar su incidencia, llenando el formulario a continuacion";
		echo json_encode(array('success'=>true,'direccion'=>'Una direccion XXXX', 'id'=>'150'));
	} 

	if(isset($_POST['subtype'])){
		// echo "llegue";
		// echo $_POST['descripcion'].' '.$_POST['id'].' '.$_POST['subtype'];
		echo json_encode(array('success'=>true));
	}
?>