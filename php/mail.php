<?php

   
    $nombre = $_POST["Nombre"];
	$de = $_POST["Correo"];
    $asunto = $_POST["Empresa"];
    $mensaje = $_POST["Mensaje"];
	$para = "ventas@hi-misting.com";

    $headers = "MIME-Version:1.0;\r\n";
    $headers .="Content-Type: text/html; \r\n charset=utf-8; \r\n";
    $headers .="From: Pagina Web - $nombre <$de>";
    
	if ( (trim($email)=="")){
		die(":From:");
			}
	else {
		mail($para, $asunto ,$mensaje ,$headers) ;
		echo "Solicitud Enviada";
		}

?>