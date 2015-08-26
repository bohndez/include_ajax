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
			document.getElementById(donde).innerHTML=conexion.responseText;
		}
	}
	//Recupero el valor de variable del archivo header.
	conexion.open("GET", archivo, true);
	conexion.send();
	console.log(archivo);
}
losInclude("header.html", 'header');
losInclude("footer.html", 'footer');