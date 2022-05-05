let mostraNumeroGerado = document.querySelector("#numero-gerado");
let botaoGerarNumero = document.querySelector("#gerar-numero");
let roleta = [];

botaoGerarNumero.addEventListener("click", () => {
  sortearNumero()
})

function sortearNumero(){
  mostraNumeroGerado.innerHTML = roleta[Math.floor(Math.random() * roleta.length)];
}

let numeroEscolhido = prompt("Escolha a partir de quantos numeros vai ser sorteado")
for (i = 0; i <= numeroEscolhido; i++) {
  roleta.push(i);
}