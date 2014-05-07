<?php
	if(isset($_POST['json'])){
		$json = json_decode($_POST['json']);		
		echo json_encode(array('success'=>true,'direccion'=>'Una direccion XXXX', 'id'=>'150'));
	} 

	if(isset($_POST['json2'])){
		$json2 = json_decode($_POST['json2']);
		echo json_encode(
				array(
					'success'	=>true, 
					'descripcion'=>$json2->descripcion, 
					'subtype'	=>$json2->subtype, 
					'id'		=>$json2->id
					)
				);
	}
?>