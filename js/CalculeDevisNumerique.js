
var etiquetteCost = 200; 
var hauteur , largeur , Quantite , Achat , vente ;
var is_affichierDevis = "True" , isChecked;
var  hideOldH = document.getElementsByClassName("headers")


function Get_input_information() {
    hauteur = document.getElementById('hauteur').value
    largeur =  document.getElementById('largeur').value
    quantite =  document.getElementById('Quantite').value

}
function affichier_switch(is_affichierDevis) {

    // hakda bach nraja3 variable array b les element li endhoum hadik class name 
    var affichierNone_collection = document.getElementsByClassName("affichier_none")
    var affichierTout_Collection = document.getElementsByClassName("affichier_tout");

    if(is_affichierDevis == "True") {

        // Hide elements with class "affichier_none"

        // b lenght na3ref length ta3 array 
        for(var i = 0 ; i < affichierNone_collection.length ; i++) {
            affichierNone_collection[i].style.display="none";
        }

        // Display elements with class "affichier_tout"
        for(var i = 0 ; i < affichierTout_Collection.length ; i++) {
            affichierTout_Collection[i].style.display="block";
        } 

        var buttonContainer = document.getElementsByClassName("buttunContainer")
        for(var i = 0 ; i < buttonContainer.length ; i++) {
            affichierTout_Collection[i].style.display="initial";
        } 
        document.getElementById("autreDevis_button").style.display="initial";

    } else if(is_affichierDevis == "False") {
        // Show elements with class "affichier_none"
        // b lenght na3ref length ta3 array 
        for(var i = 0 ; i < affichierNone_collection.length ; i++) {
            affichierNone_collection[i].style.display="initial";
        }

        // Hide elements with class "affichier_tout"
        for(var i = 0 ; i < affichierTout_Collection.length ; i++) {
            affichierTout_Collection[i].style.display="none";
        } 

        var buttonContainer = document.getElementsByClassName("buttunContainer")
        for(var i = 0 ; i < buttonContainer.length ; i++) {
            affichierTout_Collection[i].style.display="none";
        } 
        document.getElementById("autreDevis_button").style.display="none";
    }



}


function calculeDevis() {
    // transforme the values from string to float
    hauteur = parseFloat(hauteur);
    largeur = parseFloat(largeur);


    if(hauteur >= 10 || largeur >= 10) {
        Achat = (hauteur * largeur) * quantite * 0.18;
        vente = (hauteur * largeur) * quantite * 0.3;
    } else {
        Achat = (hauteur * largeur) * quantite * 0.3;
        vente = (hauteur * largeur) * quantite * 0.38;
    }

      
    document.getElementById("devisPour").innerHTML= "Devis pour " +hauteur+ " cm x " +largeur+ " cm :"
    document.getElementById("hauteurP").innerHTML= "Hauteur = \ " +hauteur+ " cm "
    document.getElementById("largeurP").innerHTML= "Quantite = \ " +largeur+ " cm "
    document.getElementById("quantite").innerHTML= "Quantite = \ " +quantite+ " \ Etiquette "
    document.getElementById("achat").innerHTML= "Achat = \ " +Achat.toFixed(2)+ " \ Da "
    document.getElementById("vente").innerHTML= "Vente = \ " +vente.toFixed(2)+ " \ Da "

} 
    

function Affichier_devis() {
    is_affichierDevis = "True";          
    Get_input_information();
    affichier_switch(is_affichierDevis)
    calculeDevis()    
}
function HideDevis() {
    is_affichierDevis = "False";
    affichier_switch(is_affichierDevis);
}
