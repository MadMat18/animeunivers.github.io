var compteur;
	compteur = 0;

function Vraioufaux(x)
{
	var pElem = document.getElementById('p');
	if (x=='V')
	{
		compteur1=1;
		pElem.innerHTML= 'Réponse selectionné: Vrai';
	}
	else if (x=='F')
	{
		compteur1=0;
		pElem.innerHTML= 'Réponse selectionné: Faux';
	}
	else{
		compteur1=0;
	}
}
	
function QCM()
{
	const selecteur = document.getElementById("choix");
	const monChoix=selecteur[selecteur.selectedIndex];
	if (monChoix.value =='l')
	{
		compteur2=2;
	}
	else{
		compteur2=0;
	}
	
}

function question()
{
	var reponse= document.getElementById("Reponse").value;
	if (reponse=="Je suis ton père.")
	{
		compteur3=2;
	}
	else{
		compteur3=0;
	}
}


function total_compteur(x)
{
	if (x=='Valider')
	{
		compteur = compteur1+compteur2+compteur3;
		alert("Vous avez obtenu la note de "+compteur+ " / 5 Félicitations !");
		compteur=0;
		compteur1=0;
		compteur2=0;
		compteur3=0;
	}
}
