function cambiarEstado()
{
	let nombre_clase=document.getElementById("parrafo_lorem").className;
	if (nombre_clase=="mostrado")
		{document.getElementById("parrafo_lorem").className="oculto";}
	else
		{document.getElementById("parrafo_lorem").className="mostrado";}
	let nom_clase=document.getElementById("texto").className;
	if (nom_clase=="rojo")
		{document.getElementById("texto").className="verde";}
	else
		{document.getElementById("texto").className="rojo";}
}