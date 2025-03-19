
let listaDeAmigos = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, digite um nome válido!');
    return;
  }

  listaDeAmigos.push(nome);
  input.value = '';
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  listaDeAmigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert('Adicione pelo menos um nome antes de sortear!');
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
  const nomeSorteado = listaDeAmigos[indiceSorteado];
  document.getElementById('resultado').innerHTML = `<li>O amigo secreto é: ${nomeSorteado}!</li>`;
}

function limparLista() {
  listaDeAmigos = [];
  atualizarLista();
  document.getElementById('resultado').innerHTML = '';
  alert('Lista de amigos limpa com sucesso!');
}

const buttonContainer = document.querySelector('.button-container');
const limparButton = document.createElement('button');
limparButton.textContent = 'Limpar Lista';
limparButton.classList.add('button-add');
limparButton.onclick = limparLista;
buttonContainer.appendChild(limparButton);
