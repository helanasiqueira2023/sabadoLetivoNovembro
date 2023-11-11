let cbAlugarCarro = document.querySelector("#alugarCarro");
let cbSeguroCarro = document.querySelector("#seguroCarro");
let vlDiariaCarro = document.querySelector("#valorDiariaCarro");
let tipoSeguro = document.querySelector("#tipoSeguroCarro");
let calcular = document.querySelector("#calcular");
let diasDestino = document.querySelector("#diasDestino");
let valorHotel = document.querySelector("#valorDiaria");
let resultado = document.querySelector("#resultado");

cbAlugarCarro.addEventListener("change", function () {
  if (this.checked) {
    cbSeguroCarro.disabled = false;
    vlDiariaCarro.disabled = false;
    tipoSeguro.disabled = false;
  } else {
    cbSeguroCarro.disabled = true;
    vlDiariaCarro.disabled = true;
    tipoSeguro.disabled = true;
  }
});

cbSeguroCarro.addEventListener("change", function () {
    if (this.checked) {
        tipoSeguro.disabled = false;
    } else {
        tipoSeguro.disabled = true;
    }
});

calcular.addEventListener("click", function () {
  let valorTotal = 0;
  valorTotal += calcularDiariaHotel(valorHotel.value, diasDestino.value);
  if (cbAlugarCarro.checked) {
    valorTotal += calcularAluguel(vlDiariaCarro.value, diasDestino.value);
    if (cbSeguroCarro.checked) {
      valorTotal += calcularSeguroCarro(
        tipoSeguro.value,
        vlDiariaCarro.value,
        diasDestino.value
      );
    }
  }
  resultado.textContent = "R$ " + valorTotal.toFixed(2);
});

function calcularAluguel(vlDiaria, diasViagem) {
  return vlDiaria * diasViagem;
}

function calcularDiariaHotel(vlDiaria, diasViagem) {
  return vlDiaria * diasViagem;
}

function calcularSeguroCarro(codTipo, diariaCarro, diasUso) {
  if (codTipo == 1) {
    return diariaCarro * diasUso * 0.08;
  } else if (codTipo == 2) {
    return diariaCarro * diasUso * 0.05;
  } else if (codTipo == 3) {
    return diariaCarro * diasUso * 0.04;
  } else if (codTipo == 4) {
    return diariaCarro * diasUso * 0.03;
  }
}
