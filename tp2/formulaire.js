function validation(){
  
	var nom = document.getElementById("nom").value;
	
	if(nom.length < 5){

	  // afficher une erreur
	  
	}

	 // ou faire une validation de tous les champs en une seule fois
	 function validation(){
	 document.getElementById("error").innerHTML = "";
  
	 for(let item of document.querySelectorAll('.inputAW'))
	 {
	   if(item.value.length < 5){
		 // recuperation du label
		 var label =   document.querySelector("label[for="+item.id+"]").textContent;
		 // ajout du message d'erreur
		 document.getElementById("error").innerHTML += `Minimum 5 caractères pour : ${label} <br/>`;
		 document.getElementById("error").classLi		st.add("display");
		 document.getElementById("resultat").classList.remove("display")
   
	 }
	}
 }
	 if(document.getElementById("error").innerHTML == ""){
	   var name = document.getElementById("nom").value
	   document.getElementById("resultat").innerHTML = `Bienvenue ${name}`;
	   document.getElementById("error").classList.remove("display")
	 document.getElementById("resultat").classList.add("display")
	 }
	  
   
	 
   }