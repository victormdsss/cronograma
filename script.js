console.log("v.1.0")

var statusContainer = document.querySelector('.statuses');
var htmlStatusUsers = "";


var diaDaSemana =["dom","seg", "ter", "qua", "qui", "sex", "sab"]
var mesDoAno =["Jan","Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

$(document).ready(function(){
    $('.carossel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true
    });
  });



// VARIÁVEIS IMPORTANTES //

    var controleDiaInicial = 27;
    var controleMes = 8

// VARIÁVEIS IMPORTANTES //



var lastDate = new Date();
var ultimoDia = new Date(lastDate.getFullYear(), lastDate.getMonth() + 1, 0);
const lastDayDate = ultimoDia.getDate();


for(var i = 0; i <= 6; i++){

    var _controleMes = controleMes;
    var diaAtual = controleDiaInicial + i;
   
    if(diaAtual > lastDayDate){
        diaAtual -= lastDayDate
        _controleMes += 1;
    }


    htmlStatusUsers +=  '<div onclick="toggleUsed(\''+diaDaSemana[i]+'\')" class="stts '+diaDaSemana[i]+'">'
    htmlStatusUsers +=      '<div class="status">'
    htmlStatusUsers +=          '<div class="image">'
    htmlStatusUsers +=              '<img src="img/status-'+diaDaSemana[i]+'.png" alt="img3">'
    htmlStatusUsers +=          '</div>'
    htmlStatusUsers +=      '</div>'
    htmlStatusUsers +=      '<h4>'+diaAtual+'/'+mesDoAno[_controleMes+1]+'</h3>'
    htmlStatusUsers +=  '</div>'


    statusContainer.innerHTML = htmlStatusUsers;

}

function toggleUsed(_me){
    document.querySelector("."+_me).children[0].classList.add("used")
    toggleDisplay()
}

function toggleDisplay(){
    document.querySelector(".storiesContainer").classList.toggle("storiesContaineractived")
}