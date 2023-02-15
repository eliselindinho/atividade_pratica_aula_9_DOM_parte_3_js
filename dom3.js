//Referenciando os elementos html através do id.

let inputNome = document.getElementById("cadastroNome");
let inputSobrenome = document.getElementById("cadastroSobrenome");
let inputCpf = document.getElementById("cpfCadastro");
let botaoValidar = document.getElementById("botao");

//Função para verificar se os inputs estão preenchidos no momento do click do botão.
function validaCampos() {
  //Verificando se os campos do input estão vazios.
  if (
    inputNome.value === "" ||
    inputSobrenome.value === "" ||
    inputCpf.value === ""
  ) {
    alert("Favor preencher todos os campos do formulário.");
  } else {
    validaCpf(inputCpf.value);
  }
}

function validaCpf(recebeCpf) {
  if (recebeCpf.length === 11) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("CPF inválido! Favor digitar um CPF válido.");
  }
}
botaoValidar.onclick = validaCampos;
