const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");

// Exibe o pop-up somente se o usuário não estiver logado
window.addEventListener("load", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn"); // Verifica se o usuário está logado
    if (!isLoggedIn) {
        showPopup();
    }
});

// Função para exibir o pop-up após um intervalo de tempo
function showPopup() {
    const timeLimit = 2; // segundos
    let i = 0;
    const timer = setInterval(function () {
        i++;
        if (i === timeLimit) {
            clearInterval(timer);
            loginPopup.classList.add("show"); // Exibe o pop-up
        }
        console.log("Pop-up exibido");
    }, 1000);
}

// Fecha o pop-up ao clicar no botão de fechar
close.addEventListener("click", function () {
    loginPopup.classList.remove("show"); // Remove a classe que exibe o pop-up
});

// Lógica usando jQuery
$(document).ready(function () {
    // Captura o evento de envio do formulário
    $("#loginPopupForm").submit(function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const username = $("#Username").val().trim(); // Captura e remove espaços do email
        const password = $("#Password").val().trim(); // Captura e remove espaços da senha

        console.log(`Username: ${username}, Password: ${password}`); // Log para depuração

        if (username === "xxx@gmail.com" && password === "666") {
            $("#loginMessage").text("Bem-vindo!").css("color", "green");

            // Armazena no localStorage que o usuário está logado
            localStorage.setItem("isLoggedIn", "true");

            // Fecha o pop-up
            $(".login-popup").removeClass("show");
            console.log("Pop-up fechado!");

            // Redireciona após 1 segundo (opcional)
            setTimeout(() => window.location.href = "index.html", 1000);
        } else {
            $("#loginMessage").text("Usuário ou senha incorretos.").css("color", "red");
            console.log("Usuário ou senha incorretos.");
        }
    });
});

