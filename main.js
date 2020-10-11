let titre = document.querySelector("#titre");
let date_valide = document.querySelector("#date_valide");
let categorie = document.querySelector("#categorie");
let desc = document.querySelector("#desc");
let btn_add = document.querySelector("#btn_add");


let table = document.querySelector("#table");


let emploi_array = []; // tableau d'objets contenant les posts d'emploi

let cat_list = document.querySelectorAll(".part2 .right p");
//alert(cat_list[1].childNodes[1].className);  //doc.childNodes[i].className == "4"
cat_list.forEach(function(item,index){
    item.addEventListener("click",function(e){
        e.preventDefault();
        table.innerHTML = "";
        creerentete();

        for(let i= 0; i< emploi_array.length; i++){
            if(emploi_array[i].categorie_id == item.id){
                var tr = document.createElement('tr');

                var tdTitre = document.createElement('td');
                var tdNumero = document.createElement('td');
                var tdDate = document.createElement('td');
                var tdDesc = document.createElement('td');

                tdNumero.appendChild(document.createTextNode(i+1));
                tdTitre.appendChild(document.createTextNode(emploi_array[i].titre));
                tdDate.appendChild(document.createTextNode(emploi_array[i].date_validite));
                tdDesc.appendChild(document.createTextNode(emploi_array[i].description));

                tr.appendChild(tdNumero);
                tr.appendChild(tdTitre);
                tr.appendChild(tdDate);
                tr.appendChild(tdDesc);

                table.appendChild(tr);

                
            }
        }
        
    });
});


let nbre_total = document.querySelector(".nbre");

// pour la création d'une nouvelle offre d'emploi
btn_add.addEventListener("click",function(e){
    event.preventDefault();

    let t = titre.value;
    let dat = date_valide.value;
    let cat = categorie.options[categorie.selectedIndex].text;
    let de = desc.value; 

    if(t != "" && dat != "" && cat != "" && de != ""){
        nbre_total.textContent = parseInt(nbre_total.textContent, 10) + 1;


        let cat_id = categorie.options[categorie.selectedIndex].value;

        let emploi = {
            categorie_id : cat_id,
            categorie_nom : cat,
            titre: t,
            date_validite: dat,
            description : de
        };

        emploi_array.unshift(emploi); //ajouter l'élement au prémier plan

        cat_list.forEach(function(item, index){
            
           if(item.id == cat_id){
            item.childNodes[1].textContent = parseInt(item.childNodes[1].textContent, 10) +1;
            return;
           }
         });

        viderChamps();
    }else{
        alert("au moins un champ est vide \n Veuillez remplir tous les champs");
    }
    console.log(emploi_array);
});


// permet de vider tous les champs après avoir créer l'offre d'emploi
function viderChamps(){
    document.querySelector("#titre").value="";
    document.querySelector("#date_valide").value="";
    document.querySelector("#categorie").value="";
    document.querySelector("#desc").value="";
}

function creerentete(){
    var tr = document.createElement('tr');

    var thTitre = document.createElement('th');
    var thNumero = document.createElement('th');
    var thDate = document.createElement('th');
    var thDesc = document.createElement('th');

    thNumero.appendChild(document.createTextNode("Numero"));
    thTitre.appendChild(document.createTextNode("Titre"));
    thDate.appendChild(document.createTextNode("Validité"));
    thDesc.appendChild(document.createTextNode("Description"));

    tr.appendChild(thNumero);
    tr.appendChild(thTitre);
    tr.appendChild(thDate);
    tr.appendChild(thDesc);

    table.appendChild(tr);
}

