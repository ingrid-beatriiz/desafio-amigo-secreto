let amigos = [];

function adicionarAmigo() {
  let nomeAmigo = document.getElementById("amigo").value;

  if (nomeAmigo == "") {
    alert("Por favor, digite um nome válido!");
    return;
  }

  amigos.push(nomeAmigo);

  let listaAmigos = document.getElementById("listaAmigos");

  if (listaAmigos.textContent == "") {
    listaAmigos.textContent = nomeAmigo;
  } else {
    listaAmigos.textContent = listaAmigos.textContent + ", " + nomeAmigo;
  }

  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("É necessário ter pelo menos 2 amigos para fazer o sorteio!");
    return;
  }

  amigos.sort(() => Math.random() - 0.5);

  let resultado = document.getElementById("resultado");
  resultado.textContent = "";

  for (let i = 0; i < amigos.length; i++) {
    let amigoAtual = amigos[i];
    let amigoSecreto = i === amigos.length - 1 ? amigos[0] : amigos[i + 1];

    let paragrafo = document.createElement("p");
    paragrafo.textContent = amigoAtual + " --> " + amigoSecreto;
    resultado.appendChild(paragrafo);
  }
}

function reiniciar() {
  amigos = [];

  document.getElementById("listaAmigos").textContent = "";

  document.getElementById("resultado").textContent = "";
}
