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

for(let m = 0 ; m < meses.length; m++){
let option_mes = document.createElement("option");
option_mes.value = meses[m];
option_mes.textContent = meses[m]
mes.appendChild(option_mes)
}

let ano = document.querySelector("#ano")

for(let a = 2020 ; a >= 1926 ; a--){
    let option_ano = document.createElement("option");
    option_ano.value = a;
    option_ano.textContent = a;
    ano.appendChild(option_ano)
}

let volta = document.querySelector("#close");
volta.addEventListener("click",()=>{
 window.location.href = "http://127.0.0.1:3000/"
})