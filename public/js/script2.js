let dia = document.querySelector("#dia");

for (let i = 1; i <= 31; i++) {
  let option_dia = document.createElement("option");
  option_dia.value = i;
  option_dia.textContent = i;
  dia.appendChild(option_dia);
}

let mes = document.querySelector("#mes");
let meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

for (let m = 0; m < meses.length; m++) {
  let option_mes = document.createElement("option");
  option_mes.value = meses[m];
  option_mes.textContent = meses[m];
  mes.appendChild(option_mes);
}

let ano = document.querySelector("#ano");

for (let a = 2020; a >= 1926; a--) {
  let option_ano = document.createElement("option");
  option_ano.value = a;
  option_ano.textContent = a;
  ano.appendChild(option_ano);
}

let volta = document.querySelector("#close");
volta.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:3000/";
});

function pegar_dados() {
  let dia_ani = dia.value;
  let mes_ani = mes.value;
  let ano_ani = ano.value;

  if (dia_ani !== "Dia" && mes_ani !== "Mês" && ano_ani !== "Ano") {
    const dataNascimento = `${dia_ani}/${mes_ani}/${ano_ani}`;

    const dados = {
      nascimento: dataNascimento,
      usuario: document.querySelector("#usuario").value,
      senha: document.querySelector("#senha").value,
    };

    enviar_dados(dados);
  } else {
    alert("Poer favor preecha os dados corretamente");
  }
}

function enviar_dados(dados) {
  fetch("http://127.0.0.1:3000/usuarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((data) => {
      console.log("Dados enviados: ", data);
    })
    .catch((erro) => {
      console.log(erro);
    });
}
document.querySelector("#enviar").addEventListener("click", (evento) => {
  evento.preventDefault();

  pegar_dados();
});
