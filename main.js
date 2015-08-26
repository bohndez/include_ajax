function losInclude(archivo, donde){

	var conexion;
	//Detecto navegador.
	if (window.XMLHttpRequest) {
		conexion = new XMLHttpRequest();
	}else{
		//Navegadores antiguos, explorer
		conexion = new ActiveXObject('Microsoft.XMLHTTP')
	}

	//Si el estado es "preparado" y "ok"
	conexion.onreadystatechange=function(){
		if(conexion.readyState==4 && conexion.status==200){
			//Selecciono el id del elemento donde voy a cargar el include
			document.getElementById(donde).innerHTML=conexion.responseText;
		}
	}
	//Recupero el contenido de los archivos a incluir.
	conexion.open("GET", archivo, true);
	conexion.send();
}
//Llamo la función cada vez que quiera incluir un archivo.
losInclude("header.html", 'header');
losInclude("footer.html", 'footer');