function fazerRegistro() {
    const novoEmailUsuario = document.getElementById("login-input").value;
    const novaSenhaUsuario = document.getElementById("senha").value;

    const dadosRegistro = {email: novoEmailUsuario, senha: novaSenhaUsuario};

    if (validarUsuario(dadosRegistro)) {
        alert("Registro realizado com sucesso!");
        window.location.href = "pagina-inicial.html";
    } else {
        alert("Erro ao registrar novo usuário");
    }

    document.getElementById('login').reset();
}