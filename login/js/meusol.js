/************************************************************************************************************
#                                                                                                           #
# Easter Egg são segredos inseridos em programas, sites, jogos, DVDs, entre outros, apenas por diversão,    #
# uma mania entre geeks e os produtos tecnológicos desenvolvidos.                                           #
#                                                                                                           #
# E é claro que eu colocaria um Easter Egg nesse projeto, como forma de divilgação deste singelo prdido de  #
# namoro, bem com para (estudo,) os calouros de CC da UERN que chegarem até aqui poderem falar pros seus    #
# parentes: "EU SEI HACKER SITES"! :P                                                                       #
#                                                                                                           #
# DIVIRTAM-SE crianças!                                                                                     #
#                                                                                                           #
# “Escolha fazer algo que você ama (se diverte) e você nunca terá que trabalhar um dia sequer na vida”      #
#                                                                                                           #
# - "Live long and prosper!"                                                                                #
# - "May the Force be with you"                                                                             #
#                                                                                                    §200   #
************************************************************************************************************/
























































































































































































function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "Valentine" && password == "280525") {
        window.location = "final.html";
        return false;
    }
    else {
        alerta();
        return false;
    }
}

function alerta() {
    swal("Desculpa!", "Não posso aceitar, você não parece ser Valentine! :(")
}
