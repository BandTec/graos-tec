
let login_usuario;
let nome_usuario;
let email_usuario;
let telefone_usuario;
let cep_usuario;
let rua_usuario;
let bairro_usuario;
let cidade_usuario;
let estado_usuario;


function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    email_usuario = sessionStorage.email_usuario_meuapp;
    telefone_usuario = sessionStorage.telefone_usuario_meuapp;
    cep_usuario = sessionStorage.cep_usuario_meuapp;
    rua_usuario = sessionStorage.rua_usuario_meuapp;
    bairro_usuario = sessionStorage.bairro_usuario_meuapp;
    cidade_usuario = sessionStorage.cidade_usuario_meuapp;
    estado_usuario = sessionStorage.estado_usuario_meuapp;

    if (login_usuario == undefined) {
        redirecionar_login();
    } else {
        nome_texto_nav.innerHTML = nome_usuario;
        nome_texto.innerHTML = nome_usuario;
        email_texto.innerHTML = email_usuario;
        telefone_texto.innerHTML = telefone_usuario;
        cep_texto.innerHTML = cep_usuario;
        rua_texto.innerHTML = rua_usuario;
        bairro_texto.innerHTML = bairro_usuario;
        cidade_texto.innerHTML =  cidade_usuario;
        estado_texto.innerHTML = estado_usuario;
       
        validar_sessao();
    }

}



function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, { cache: 'no-store' })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            }
        });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, { cache: 'no-store' });
}


