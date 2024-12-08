

var etiquetteCost = 18000; 
var Tirage, Achat, quantite , ToutPose , nombreFeuille , feuilleCost , newNombreFeuille ;
var pose34,pose23,pose32,pose21;
var hauteur , largeur ;
var meillure34 , meillure23 , max34 , max32 , meillure21 , meillure32;
var is_affichierDevis = "True" , isChecked;
var  hideOldH = document.getElementsByClassName("headers")


function Get_input_information() {
    hauteur = document.getElementById('hauteur').value
    largeur =  document.getElementById('largeur').value
    newNombreFeuille = document.getElementById("nombreFeuille").value

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
function getCheck () {
    isChecked = document.getElementById("isMoreCheck")
    if(isChecked.checked == true) {
        document.getElementById("nombreFeuille").removeAttribute("disabled");
        document.getElementById("nombreFeuille").style.backgroundColor="#f0f0f0"
        return true;

    } else {
        document.getElementById("nombreFeuille").setAttribute("disabled","disabled"); 
        document.getElementById("nombreFeuille").style.backgroundColor="#c8c7c7"
        return false;
    }
    
}
function remlirfomuleCheck () {
    if (hauteur == "" || largeur == "" ) {
        console.log("veuillez remplir le champ de hauteur et largeur et avec des nombre");
    } 
    if(getCheck () == true) {
        if(newNombreFeuille == "") {
            {
                console.log("veuillez remplir le champ de NombreFeuille et avec des nombre");
            }    
        } 
    }

}
function calculeDevis() {
    // transforme the values from string to float
    hauteur = parseFloat(hauteur);
    largeur = parseFloat(largeur);

    // Opperation pour format 35/25
    // transform the operation to integer 
    var hauteur34 = parseInt(34/hauteur);
    var largeur23 = parseInt(23/largeur);
    var hauteur23 = parseInt(23/hauteur);
    var largeur34 = parseInt(34/largeur);

    // calculate wht the better position for both dimenstion
    if((hauteur34 * largeur23) >= (hauteur23 * largeur34 ) ) {
        meillure34 = hauteur;
        meillure23 = largeur;
        pose34 = hauteur34;
        pose23 = largeur23;
        max34 = hauteur34 * largeur23 ;
    } else {
        meillure34 = largeur;
        meillure23 = hauteur ;
        pose34 = largeur34;
        pose23 = hauteur23
        max34 = hauteur23 * largeur34 ;
    }

    // Operation pour format 33/23
    var hauteur32 = parseInt(32/hauteur); 
    var largeur21 = parseInt(21/largeur);
    var hauteur21 = parseInt(21/hauteur);
    var largeur32 = parseInt(32/largeur);

    if((hauteur32 * largeur21) >= (hauteur21 * largeur32 ) ) {
        meillure32 = hauteur;
        meillure21 = largeur;
        pose32 = hauteur32;
        pose21 = largeur21;
        max32 = hauteur32 * largeur21 ;
    } else {
        meillure32 = largeur;
        meillure21 = hauteur ;
        pose32 = largeur32;
        pose21 = hauteur21;
        max32 = hauteur21 * largeur32 ;
    
    }

    // Knowing wht Format better
    if (max34 > max32 ) {

        document.getElementById("header1").innerHTML = "La Forme pour impression : 35cm x 25cm "

        ToutPose = pose34 * pose23 ;
        // Pour Montage 
        document.getElementById("dimenstion_sur_30").innerHTML= " La Dimenstion sur 35 : \ " +meillure34+ " \ cm "
        document.getElementById("dimenstion_sur_20").innerHTML= " La Dimenstion sur 25 : \ " +meillure23+ " \ cm"
        document.getElementById("nombre_pose_30").innerHTML= " Nombre de pose sur 35 : \ " +pose34+ " \ pose "
        document.getElementById("nombre_pose_20").innerHTML= " Nombre de pose sur 25 : \ " +pose23+ " \ pose"
        document.getElementById("nombre_pose_Tout").innerHTML= " Nombre Totale de Pose : \ " +ToutPose+ " \ pose"
        var  blue = document.getElementsByClassName("headers");

        if(getCheck () == true) {
            
            document.getElementById("newNombreHeader").style.display="initial"
            document.getElementById("newNombreHeader").innerHTML= " Pour  \ " +newNombreFeuille+ " \ feuille : "
            hideOldH[0].style.display="none"
            hideOldH[1].style.display="none"
            console.log(hideOldH[0])
            console.log(hideOldH[1])
            hideOldH[2].style.display="none"
            hideOldH[3].style.display="none"
            hideOldH[4].style.display="none"


            nombreFeuille = newNombreFeuille;
            etiquetteCost = 18000;
            feuilleCost = nombreFeuille * 100;
            etiquetteCost = etiquetteCost + feuilleCost ;
            console.log("etiquetteCost = "+etiquetteCost);
            Tirage = nombreFeuille * 8;
            quantite = Tirage * max34 ;
            Achat = etiquetteCost / quantite ;
            document.getElementById("tirage_125").innerHTML= " Tirage =  \ " +Tirage+ " \ "
            document.getElementById("quantite_125").innerHTML= "Quantite = \ " +quantite+ " \ Etiquette "
            document.getElementById("achat_125").innerHTML= "Achat = \ " +Achat.toFixed(2)+ " \ Da "

        } else {
            document.getElementById("newNombreHeader").style.display="none"
            // Pour 62 feuille
            nombreFeuille = 62 ;
            etiquetteCost = 18000;
            feuilleCost = 65 * 100;
            etiquetteCost = etiquetteCost + feuilleCost ;
            Tirage = nombreFeuille * 8;
            quantite = Tirage * max34 ;
            Achat = etiquetteCost / quantite ;

            document.getElementById("tirage_62").innerHTML= " Tirage =  \ " +Tirage+ " \ "
            document.getElementById("quantite_62").innerHTML= "Quantite = \ " +quantite+ " \ Etiquette "
            document.getElementById("achat_62").innerHTML= "Achat = \ " +Achat.toFixed(2)+ " \ Da"

            // Pour 125 feuille
            nombreFeuille = 125;
            etiquetteCost = 18000;
            feuilleCost = nombreFeuille * 100;
            etiquetteCost = etiquetteCost + feuilleCost ;
            Tirage = nombreFeuille * 8;
            quantite = Tirage * max34 ;
            Achat = etiquetteCost / quantite ;

            document.getElementById("tirage_125").innerHTML= " Tirage =  \ " +Tirage+ " \ "
            document.getElementById("quantite_125").innerHTML= "Quantite = \ " +quantite+ " \ Etiquette "
            document.getElementById("achat_125").innerHTML= "Achat = \ " +Achat.toFixed(2)+ " \ Da "
        }


    } else if(max32 >= max34) {

        document.getElementById("header1").innerHTML = "La Forme pour impression : 33cm x 23cm "
        
        ToutPose = pose32 * pose21 ;
        
        // Pour Montage 
        document.getElementById("dimenstion_sur_30").innerHTML= " La Dimenstion sur 33 : \ " +meillure32+ " \ cm "
        document.getElementById("dimenstion_sur_20").innerHTML= " La Dimenstion sur 23 : \ " +meillure21+ " \ cm"
        document.getElementById("nombre_pose_30").innerHTML= " Nombre de pose sur 33 : \ " +pose32+ " \ pose "
        document.getElementById("nombre_pose_20").innerHTML= " Nombre de pose sur 23 : \ " +pose21+ " \ pose"
        document.getElementById("nombre_pose_Tout").innerHTML= " Nombre Totale de Pose : \ " +ToutPose+ " \ pose"

        // check if calculate devis for ( 62&125 ) or new paper number 
        if(getCheck () == true) {
            document.getElementById("newNombreHeader").style.display="initial"
            document.getElementById("newNombreHeader").innerHTML= " Pour  \ " +newNombreFeuille+ " \ feuille : "
            
            hideOldH[0].style.display="none"
            hideOldH[1].style.display="none"
            hideOldH[2].style.display="none"
            hideOldH[3].style.display="none"
            hideOldH[4].style.display="none"

            nombreFeuille = newNombreFeuille;
            etiquetteCost = 18000;
            feuilleCost = nombreFeuille * 100;
            etiquetteCost = etiquetteCost + feuilleCost ;
            Tirage = nombreFeuille * 9;
            quantite = Tirage * max34 ;
            Achat = etiquetteCost / quantite ;
            document.getElementById("tirage_125").innerHTML= " Tirage =  \ " +Tirage+ " \ "
            document.getElementById("quantite_125").innerHTML= "Quantite = \ " +quantite+ " \ Etiquette "
            document.getElementById("achat_125").innerHTML= "Achat = \ " +Achat.toFixed(2)+ " \ Da "

        } else {
            document.getElementById("newNombreHeader").style.display="none"
            // Pour 62 feuille
            nombreFeuille = 62 ;
            etiquetteCost = 18000;
            feuilleCost = 65 * 100;
            etiquetteCost = etiquetteCost + feuilleCost ;
            console.log("etiquetteCost = "+etiquetteCost);
            Tirage = nombreFeuille * 9;
            quantite = Tirage * max32;
            Achat = etiquetteCost / quantite ;

            document.getElementById("tirage_62").innerHTML= " Tirage =  \ " +Tirage+ " \ "
            document.getElementById("quantite_62").innerHTML= "Quantite = \ " +quantite+ " \ Etiquette "
            document.getElementById("achat_62").innerHTML= "Achat = \ " +Achat.toFixed(2)+ " \ Da "

            // Pour 125 feuille
            nombreFeuille = 125;
            etiquetteCost = 18000;
            feuilleCost = nombreFeuille * 100;
            etiquetteCost = etiquetteCost + feuilleCost ;
            Tirage = nombreFeuille * 9;
            quantite = Tirage * max32;
            Achat = etiquetteCost / quantite ;
            
            document.getElementById("tirage_125").innerHTML= " Tirage =  \ " +Tirage+ " \ "
            document.getElementById("quantite_125").innerHTML= "Quantite = \ " +quantite+ " \ Etiquette "
            document.getElementById("achat_125").innerHTML= "Achat = \ " +Achat.toFixed(2)+ " \ Da "
    
        }
    }
}
function Affichier_devis() {
    is_affichierDevis = "True";          
    Get_input_information();
    remlirfomuleCheck ()
    affichier_switch(is_affichierDevis)
    calculeDevis()    
}
function HideDevis() {
    is_affichierDevis = "False";
    affichier_switch(is_affichierDevis);
}
