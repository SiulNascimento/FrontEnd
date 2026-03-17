document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name')
    const profilPicElement = document.querySelector('#profilPic')
    const logginElement = document.querySelector('#loggin')
    const repositorioElement = document.querySelector('#repositorio')
    const followersElement = document.querySelector('#followers')
    const followElement = document.querySelector('#follow')
    const linkElement = document.querySelector('#link')

    fetch('https://api.github.com/users/SiulNascimento')
        .then(function (resposta) {
            return resposta.json()
        })
        .then(function(json) {
            nameElement.innerText = json.name
            profilPicElement.src = json.avatar_url
            logginElement.innerText = json.login
            repositorioElement.innerText = json.public_repos
            followersElement.innerText = json.followers
            followElement.innerText = json.following
            linkElement.href = json.json.html.url
        })
})

/*
$(document).ready(function() {

    const endpoint = `https://api.github.com/users/SiulNascimento`;
    

    fetch(endpoint)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            document.querySelector('#name').innerText = json.name; 
            document.querySelector('#loggin').innerText = json.login; 
            document.querySelector('#profilPic').src = json.avatar_url; 
            document.querySelector('#repositorio').innerText = json.public_repos;
        
        
        const link = json.html.url;
        const repositorio = json.public_repos;
        const follow = json.following;
        const followers = json.followers;
        const profilPic= json.avatar_url;
        const name = json.name;
        const loggin= json.login;
        })
})

/*
fetch('https://api.github.com/users/SiuNascimento') 
    .then(res => res.json()) 
    .then(json => { 
        document.querySelector('#name').innerText = json.name; 
        document.querySelector('#username').innerText = json.login; 
        document.querySelector('#avatar').src = json.avatar_url; 
        document.querySelector('#repos').innerText = json.public_repos; 
    });

*/