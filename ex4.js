var nombre=Math.random()*(100-1), devine = 0;
nombre=Math.round(nombre)
while (devine!=nombre)
{
	devine=prompt('Quel est le nombre ?');
	if (devine>nombre)
	{
		alert('Plus petit')
	}
	if (devine<nombre)
	{
		alert('Plus grand')
	}

}

	alert('Gagné');