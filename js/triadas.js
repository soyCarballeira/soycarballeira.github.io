var objeto = [
	'Caja de música', 
	'Espada', 
	'Anillo', 
	'Lapicero', 
	'Botella', 
	'Arpa', 
	'Antorcha', 
	'Cuerda', 
	'Caballo', 
	'Basura', 
	'Títere', 
	'Máscara', 
	'Baraja de cartas', 
	'Pie', 
	'Ojos', 
	'Vaso', 
	'Taberna', 
	'Posada', 
	'Muñeco', 
	'Perro', 
	'Café', 
	'Sombrero', 
	'Botas', 
	'Azúcar', 
	'Sal', 
	'Mapa', 
	'Silla', 
	'Dinero', 
	'Cuerda', 
	'Peine', 
	'Saxofón', 
	'Laúd', 
	'Cadáver', 
	'Puñal', 
	'Queso', 
	'Puente', 
	'Ratón', 
	'Zapato', 
	'Lago', 
	'Moneda', 
	'Trapo', 
	'Cerrojo', 
	'Flauta', 
	'Vino'

]

var sentimiento = [
	'Odio', 
	'Miedo', 
	'Pereza', 
	'Culpabilidad', 
	'Desdicha', 
	'Vergüenza', 
	'Cautela', 
	'Frustración', 
	'Celos', 
	'Impotencia', 
	'Desgana', 
	'Agresividad', 
	'Pánico', 
	'Enojo', 
	'Envidia', 
	'Soledad', 
	'Orgullo', 
	'Aprecio', 
	'Egocentrismo', 
	'Euforia', 
	'Optimismo', 
	'Placer', 
	'Lealtad', 
	'Vanidad', 
	'Sosiego', 
	'Aburrimiento', 
	'Descaro (≠vergüenza)', 
	'Altruismo', 
	'Deseo', 
	'Remordimiento', 
	'Incertidumbre', 
	'Resignación', 
	'Nostalgia', 
	'Esperanza', 
	'Duda', 
	'Paciencia', 
	'Perplejidad', 
	'Desconcierto', 
	'Humildad', 
	'Impaciencia', 
	'Preocupación', 
	'Asco/Repugnancia', 
	'Confianza', 
	'Angustia'

]

var accion = [
	'Observar', 
	'Sugerir', 
	'Manipular', 
	'Recordar', 
	'Reconciliar', 
	'Transportar', 
	'Inspeccionar', 
	'Encontrar', 
	'Beber', 
	'Dormir', 
	'Abrazar', 
	'Despertar', 
	'Besar', 
	'Aconsejar', 
	'Leer', 
	'Llorar', 
	'Cerrar', 
	'Estudiar', 
	'Recitar', 
	'Morder', 
	'Cocinar', 
	'Quemar', 
	'Oler', 
	'Asustar', 
	'Dibujar', 
	'Escuchar', 
	'Huir', 
	'Cantar', 
	'Bailar', 
	'Esconder', 
	'Elegir', 
	'Imaginar', 
	'Explicar', 
	'Escribir', 
	'Instituir', 
	'Reducir', 
	'Negociar', 
	'Probar', 
	'Contar', 
	'Influir', 
	'Detectar', 
	'Terminar', 
	'Juntar', 
	'Vender'

]

var handlers ={
	randomItem: function(myArray){
		return myArray[Math.floor(Math.random()*myArray.length)];
	},
	generar: function(){
		var randomObjeto = handlers.randomItem(objeto);
		var randomSentimiento = handlers.randomItem(sentimiento);
		var randomAccion = handlers.randomItem(accion);
		console.log(randomObjeto);

	},
	cambiarObjeto: function(){

	}
}

$(document).ready(function(){
    $("#generar").click(function(){
    	var randomObjeto = handlers.randomItem(objeto);
		var randomSentimiento = handlers.randomItem(sentimiento);
		var randomAccion = handlers.randomItem(accion);
		var trinos = document.getElementById("compartirT");
		var caralibro = document.getElementById("compartirF");

        $("#objeto").text(randomObjeto);
        $("#sentimiento").text(randomSentimiento);
        $("#accion").text(randomAccion);
        trinos.style.display = "inline";
        caralibro.style.display = "inline";

    });
    $("#cObjeto").click(function(){
    	var randomObjeto = handlers.randomItem(objeto);
        $("#objeto").text(randomObjeto);
    });
    $("#cSentimiento").click(function(){
		var randomSentimiento = handlers.randomItem(sentimiento);
        $("#sentimiento").text(randomSentimiento);
    });
    $("#cAccion").click(function(){
		var randomAccion = handlers.randomItem(accion);
        $("#accion").text(randomAccion);
    });

	$("#compartirT").click(function(){
    	var url = "https://soycarballeira.github.io";
		var text = "@soycarballeira me he retado a escribir una historia con la tríada: \n objeto: " + $("#objeto")[0].textContent + "\n sentimiento: " + $("#sentimiento")[0].textContent + "\n acción: " + $("#accion")[0].textContent + "\n";
		var hashtag = "retosCarballeira";
		window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text)+'&hashtags='+encodeURIComponent(hashtag), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
	});	

	$("#compartirF").click(function(){
    	var url = "https://soycarballeira.github.io";
		var text = "@soycarballeira me he retado a escribir una historia con la tríada: \n objeto: " + $("#objeto")[0].textContent + "\n sentimiento: " + $("#sentimiento")[0].textContent + "\n acción: " + $("#accion")[0].textContent + "\n";
		var hashtag = "#retosCarballeira";
		window.open('http://facebook.com/sharer/sharer.php?u='+encodeURIComponent(url)+'&quote='+encodeURIComponent(text)+'&hashtag='+encodeURIComponent(hashtag), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
	});

});

