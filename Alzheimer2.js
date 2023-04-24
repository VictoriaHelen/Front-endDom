function comandos(){
    var texto = document.getElementById("texto").value;
    var box= document.createElement("span");
    var div = document.createElement("div");      
    document.body.appendChild(div);      
    box.id = "conteudo";
    box.innerHTML = texto;
    div.appendChild(box);
    div.classList.add("div-shadow");
  
/====================================================/
    var apagar = document.createElement("button");
    apagar.id = "Excluir";
    apagar.classList="btn-add"
    apagar.innerHTML = "❌️";
    div.appendChild(apagar);
    apagar.onclick = erase;
/====================================================/
    var editar = document.createElement("button");
    editar.id = "Editar";
    editar.classList="btn-add"
    editar.innerHTML = "📝";
    div.appendChild(editar);
    editar.onclick = edit;
/====================================================/
    function edit(){
        var mudar =prompt( "Se quiser editar o texto, o edite aqui");
        if (mudar==false || mudar==""){
           box.innerHTML=texto;
      }else{
             box.innerHTML=mudar;
    }
    }
/====================================================/
    function erase(){
    div.remove();
    }
    }  

       function Lugar(){
           var place = document.getElementById("lugares")
           var ed= document.getElementById("address")

           if (place.value == 1){
               var optHospital = document.createElement("option")
               optHospital.value="hosp";
               optHospital.innerHTML="Rua Astolfo Guerra,432";
               ed.appendChild(optHospital);

               var  optHospital2= document.createElement("option")
               optHospital2.value="hosp";
               optHospital2.innerHTML="Rua Direita e Esquerda,908";
               ed.appendChild(optHospital2);

           }
           else if(place.value == 2){
               var  optBiblioiteca= document.createElement("option")
               optBiblioiteca.value="bib";
               optBiblioiteca.innerHTML="Av.Cachoeria,875";
               ed.appendChild(optBiblioiteca);

               var  optBiblioiteca2= document.createElement("option")
               optBiblioiteca2.value="bib";
               optBiblioiteca2.innerHTML="Rua Tatuapé Andando,85";
               ed.appendChild(optBiblioiteca2);
           }
           else if(place.value == 3){
                  var  optPadaria= document.createElement("option")
                  optPadaria.value="pad";
                  optPadaria.innerHTML="Esquina da minha casa";
                  ed.appendChild(optPadaria);

                  var  optPadaria2= document.createElement("option")
                  optPadaria2.value="pad";
                  optPadaria2.innerHTML="Rua atrás da minha casa";
                  ed.appendChild(optPadaria2);
              }
           
              else if(place.value == 4){
                var  optSupermercado= document.createElement("option")
                optSupermercado.value="sup";
                optSupermercado.innerHTML="Av.Expedicionário Francisco Vitoriano,643";
                ed.appendChild(optSupermercado);

                var  optSupermercado2= document.createElement("option")
                optSupermercado2.value="sup";
                optSupermercado2.innerHTML="Av.Mauricio de Nassau,87";
                ed.appendChild(optSupermercado2);


       }
    }