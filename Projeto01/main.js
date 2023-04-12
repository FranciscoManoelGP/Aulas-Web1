const botaoCalcular = document.querySelector("#btn_calcular");

botaoCalcular.addEventListener('click', calcularIMC);

function calcularIMC() {
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value;
    const imc = peso/(altura**2);
    const resultado = document.querySelector("#resultado");
  
    let mensagem;
  
    if (imc > 25) {
      mensagem = "Sobrepeso!";
      resultado.style.backgroundColor = "red"
    } else if (imc >= 18.5) {
      mensagem = "Peso adequado!";
      resultado.style.backgroundColor = "green"
    } else {
      mensagem = "Baixo peso!";
      resultado.style.backgroundColor = "red"
    }
  
    resultado.textContent = `${imc.toFixed(2)} - ${mensagem}`;
}