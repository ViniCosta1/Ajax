$(document).ready(function (e) {
    // Ajax para pegar todos os Estados do Brasil
    $.ajax({
        type: "get",
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
        data: {orderBy: "nome"}, // Para deixar em ordem alfabética os nomes dos estados
        dataType: "json",
        success: function (response) {
            // Para cada objeto contendo os estados....
            $.each(response, function (indexInArray, valueOfElement) { 
                var option = "<option>"+valueOfElement.sigla+"</option>" // Criar uma variável contendo a tag HTML
                $("#uf").append(option) // Coloca a variável de HTML dentro da id UF
            });
        }
    });

    // Quando mudar a opção UF...
    $('#uf').change(function (e) { 
        e.preventDefault();
        $("#local").empty();
        var uf = $("#uf").val();

        // Quando voltar a selecionar "Estados", volta a colocar "cidades" no select de cidades
        if (uf == 'Estados') {
            var option = "<option>Cidades</option>"
            $("#local").append(option)
            return
        }        

        // Ajax para pegar todas as cidades de qualquer estado
        $.ajax({
            type: "get",
            url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+uf+"/municipios",
            data: {orderBy: "nome"}, // Para deixar em ordem alfabética os nomes das cidades
            dataType: "json",
            success: function (response) {
                // Para cada objeto contendo os cidades....
                $.each(response, function (indexInArray, valueOfElement) { 
                    var option = "<option>"+valueOfElement.nome+"</option>" // Criar uma variável contendo a tag HTML
                    $("#local").append(option) // Coloca a variável de HTML dentro da id local
                });
            }
        });
    });
});
