function lettre(x)
{
	long=mot.length;
	for (var N=0 ; N<= long; N=N+1)
	{
		if (mot.charAt(N)=="e")
		{
			return ('Vrai');
		}
	}
	return ('Faux');
}

var mot=prompt('écrire un mot ou une chaine de caractère');
alert(lettre(mot));