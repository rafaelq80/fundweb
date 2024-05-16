let sobre = document.querySelector("#sobre");

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

let nomeOk = false;
let emailOk = false;
let messageOk = false;
let cepOk = false;

function validarNome() {
  let txtNome = document.querySelector("#txtNome");

  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome muito curto";
    txtNome.style.color = "red";
    nomeOk = false;
  } else {
    txtNome.innerHTML = "";
    nomeOk = true;
  }
}

function validarEmail() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.match(regex)) {
    txtEmail.innerHTML = "";
    emailOk = true;
  } else {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
    emailOk = false;
  }
}

function validarMessage() {
  let txtMensagem = document.querySelector("#txtMensagem");

  if (message.value.length >= 50) {
    txtMensagem.innerHTML = "Mensagem muito grande!";
    txtMensagem.style.color = "red";
    messageOk = false;
  } else {
    txtMensagem.innerHTML = "";
    messageOk = true;
  }
}

function enviarForm() {
  if (nomeOk === true && emailOk === true && messageOk === true) {
    alert(nome.value + ", obrigado pelo contato, aguarde nosso retorno.");
  } else {
    alert("Por favor, preencha todos os campos corretamente.");
  }
}

async function getApiGithub() {

  try {
    const dadosPerfil = await fetch("https://api.github.com/users/rafaelq80");
    const perfil = await dadosPerfil.json();

    let conteudo = `
        <img src="${perfil.avatar_url}"
        alt="Foto do Perfil do Github - ${perfil.name}">

        <article id="sobre-texto"> <!-- Adicione aqui as CLASSES -->
        <h1>Quem sou eu?</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odit voluptates incidunt
            inventore rem error harum blanditiis accusamus vitae, minus fugit consequatur? Dolorum maiores magni
            deleniti modi sit laudantium totam!
        </p>

        <div id="sobre-github" class="sobre_github flex"> <!-- Adicione aqui as CLASSES -->
            <a class="btn" target="_blank" href="${perfil.html_url}">Github</a>
            <!-- Adicione aqui as CLASSES -->
            <p>${perfil.followers} Seguidores</p>
            <p>${perfil.public_repos} Repositórios</p>
        </div>

        </article>
    `;

    sobre.innerHTML += conteudo;

  } catch (error) {
    console.log(error);
  }

}

getApiGithub();