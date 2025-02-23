const voltar = document.querySelector("#close");
voltar.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:3000";
});

fetch("http://127.0.0.1:3000/usuarios")
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  })
  .then((data) => {
    data.forEach((login) => {
      console.log(login.senha);
    });
  })
  .catch((erro) => {
    console.log(erro);
  });
