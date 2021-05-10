var AB=prompt('Donnez la longueur AB'), AC=prompt('Donnez la longueur AC'), BC;
AB=parseFloat(AB);
AC=parseFloat(AC);
BC=parseFloat(BC);
AB=AB**2;
AC=AC**2;
BC=AB+AC;
BC=Math.sqrt(BC)
alert('L\'hypoténus est environ égale à ' +BC);