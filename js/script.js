let mostraNumeroGerado = document.querySelector("#numero-gerado");
let botaoGerarNumero = document.querySelector("#gerar-numero");
let roleta = [];

botaoGerarNumero.addEventListener("click", () => {
  sortearNumero()
})

function sortearNumero(){
  mostraNumeroGerado.innerHTML = roleta[Math.floor(Math.random() * roleta.length)];
}

for (i = 0; i <= 100; i++) {
  roleta.push(i);
}