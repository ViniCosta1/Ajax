// * Quando apertar o botão:
$('#form1').submit(function(e){
    // * Impedindo que a página atualize depois de clicar no botão
    e.preventDefault();

    // * Pegando valor de variável
    var u_name = $('#name').val();
    var u_comment = $('#comment').val();

    // console.log(u_name, u_comment);

    // * Enviando dados para o php
    $.ajax({
        url: '../controle/inserir.php',
        method: 'POST',
        data: {name: u_name, comment: u_comment},
        dataType: 'json'
    }).done(function(result){
        console.log(result);
        getComments();
    });
});

function getComments(){
    $.ajax({
        url: '../controle/selecionar.php',
        method: 'GET',
        dataType: 'json'
    }).done(function(result){
        console.log(result);


        for (var i = 0; i<result.length; i++) {
            $('.comentario').prepend('<h4 class="m-0">' + result[i].name+ '</h4><p>' + result[i].comment+ '</p></div><div class="dropdown-divider"></div>');
        }
    });
}

getComments();