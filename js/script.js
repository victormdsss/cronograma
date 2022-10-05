

console.log("v.1.0")

var statusContainer = document.querySelector('.statuses');
var feedContainer = document.querySelector('.feed');
var htmlStatusUsers = "";
var htmlFeed = "";
var diaDaSemana =["dom","seg", "ter", "qua", "qui", "sex", "sab"];
var diaDaSemanaFeed =["Domingo","Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var mesDoAno =["Jan","Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

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
    var controleMes = 8;

// VARIÁVEIS IMPORTANTES //

            




var lastDate = new Date();
var ultimoDia = new Date(lastDate.getFullYear(), lastDate.getMonth() + 1, 0);
const lastDayDate = ultimoDia.getDate();


for(var i = 0; i <= 6; i++){

    var _controleMes = controleMes;
    var diaAtual = controleDiaInicial + i;
   
    if(diaAtual > lastDayDate){
        diaAtual -= lastDayDate;
        _controleMes += 1;
    }


    htmlStatusUsers +=  '<div onclick="toggleUsed(\''+diaDaSemana[i]+'\')" class="stts '+diaDaSemana[i]+'">';
    htmlStatusUsers +=      '<div class="status">';
    htmlStatusUsers +=          '<div class="image">';
    htmlStatusUsers +=              '<img src="img/status-'+diaDaSemana[i]+'.png" alt="img3">';
    htmlStatusUsers +=          '</div>';
    htmlStatusUsers +=      '</div>';
    htmlStatusUsers +=      '<h4>'+diaAtual+'/'+mesDoAno[_controleMes+1]+'</h3>';
    htmlStatusUsers +=  '</div>';


    statusContainer.innerHTML = htmlStatusUsers;

}

for(var i = 0; i <= 6; i++){
    
    var _controleMes = controleMes;
    var diaAtual = controleDiaInicial + i;
   
    if(diaAtual > lastDayDate){
        diaAtual -= lastDayDate;
        _controleMes += 1;
    }

    htmlFeed +=             '<div class="card">' ;
        htmlFeed +=             '<div class="top">';
            htmlFeed +=             '<div class="userDetails">';
                htmlFeed +=             '<div class="profilepic '+diaDaSemana[i]+'f">';
				    htmlFeed +=             '<div onclick="toggleUsed(\''+diaDaSemana[i]+'\')" class="profile_img">';
					    htmlFeed +=             '<div class="image" >';
						    htmlFeed +=             '<img src="img/status-'+diaDaSemana[i]+'.png" alt="">';
                        htmlFeed +=             '</div>';
					htmlFeed +=             '</div>';
                htmlFeed +=             '</div>';
                htmlFeed +=             '<h3>'+diaDaSemanaFeed[i]+'<br>';	
				    htmlFeed +=		        '<span>'+diaAtual+'/'+mesDoAno[_controleMes+1]+'</span>';
                htmlFeed +=	            '</h3>';
			htmlFeed +=	            '</div>';
            htmlFeed +=	            '<div>';
                htmlFeed +=	            '<span class="dot">';
                    htmlFeed +=	            '<i class="fas fa-ellipsis-h"></i>';
                htmlFeed +=	            '</span>';
            htmlFeed +=	            '</div>';
        htmlFeed +=	            '</div>';
        htmlFeed +=	            '<div class="imgBx carossel">';
        for(var j = 1; j <= 9; j++){
	        var url = "img/seg-folder/seg(1).png"
            var img = '<img src="'+ url +'" />';
            var _diaDaSemana = diaDaSemana[i];
            
            htmlFeed += '<img width="100%" src="img/'+diaDaSemana[i]+'-folder/'+diaDaSemana[i]+' ('+j+').png" >';
            
            
            //htmlFeed +=	            '<img class="'+diaDaSemana[i]+'-feed'+j+'" width="100%" src="img/'+diaDaSemana[i]+'-folder/seg('+j+').png" onError="excluiAqui(\''+diaDaSemana[i]+'-feed'+j+'\')">';
        }
            
            htmlFeed +=	            '<img width="100%" src="img/nao-agendado.png" alt="">';
        htmlFeed +=	            '</div>';
		htmlFeed +=	            '<div class="bottom">';
            htmlFeed +=	            '<div class="actionBtns">';
                htmlFeed +=	            '<div class="left">';
                    htmlFeed +=	            '<span class="heart" onclick="addlike()">';
                        htmlFeed +=	            '<span>';
                            htmlFeed +=	            '<svg aria-label="Like"color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24">';
                                htmlFeed +=             '<path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"> </path>';
					        htmlFeed +=	            '</svg>';
                        htmlFeed +=	            '</span>';
					htmlFeed +=	            '</span>';
                    htmlFeed +=	            '<svg aria-label="Comment" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24">';
                        htmlFeed +=	            '<path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"> </path>';
					htmlFeed +=	            '</svg>';
                htmlFeed +=	            '</div>';
            htmlFeed +=	            '</div>';
            htmlFeed +=	            '<p class="message">';
                htmlFeed +=	            '<b>cartaosaudema </b>Quer conhecer os parceiros do Cartão Saúde?<br> Então assista esse vídeo e saiba como ter sempre acesso a Rede Credenciada do Cartão Saúde atualizada ✅ <br>➡️ Para mais informações clique no link da bio.';
			    htmlFeed +=	            '<br>';			
            htmlFeed +=	            '</p>';
            htmlFeed +=	            '<br>';
        htmlFeed +=	            '</div>';
    htmlFeed +=	            '</div>';

    feedContainer.innerHTML = htmlFeed;
}

function toggleUsed(_me){
    document.querySelector("."+_me).children[0].classList.add("used");
    document.querySelector("."+_me+"f").children[0].classList.add("used");
    toggleDisplay();
}

function toggleDisplay(){
    document.querySelector(".storiesContainer").classList.toggle("storiesContaineractived");
}


function checkImagem(url) {
    var img = '<img src="'+ url +'" />';
    $(img).load(function() {
      $('.carossel').append(url+img);
    }).bind('error', function() {
      alert('imagem: '+url+' não existe');
    });
   }