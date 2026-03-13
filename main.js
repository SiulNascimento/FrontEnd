/*
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        xhttp.open('GET', endpoint);
        xhttp.send();
    })
})
*/

$(document).ready(function() {
    $('#cellphone').mask('0000-0000');
    $('#cep').mask('00000-000');
    

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function(resposta) {
            const bairro = resposta.bairro;
            const logradouro = resposta.logradouro;
            const estado = resposta.estado;
            const cidade = resposta.localidade;
            const ddd = resposta.ddd;

            const endereco = `${estado} - ${cidade} - ${logradouro}, ${bairro}`;
            const numb = `${ddd}`;

            $('#endereco').val(endereco);
            $('#indicativo').val(ddd);

            setTimeout ( function() {
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 1000);
        })
    })
})


$(document).ready(function() {

    $('#cep2').mask('00000-000');
    $('#cellphone2').mask('00000-0000');

    $('#btn-buscar-cep2').click(function() {

        const cep = $('#cep2').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);

        botao.find('i').addClass('d-none');
        botao.find('span').removeClass('d-none');

        fetch(endpoint)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){

            const bairro = json.bairro;
            const logradouro = json.logradouro;
            const cidade = json.localidade;
            const ddd = json.ddd;

            const endereco = `${cidade} - ${logradouro}, ${bairro}`;

            $('#adress').val(endereco);
            $('#indicativo2').val(ddd);

            setTimeout(function(){
                botao.find('i').removeClass('d-none');
                botao.find('span').addClass('d-none');
            },500);

        });

    });

});