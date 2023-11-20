function fazerRegistro() {
    const novoEmailUsuario = document.getElementById("novo-email").value;
    const novaSenhaUsuario = document.getElementById("nova-password").value;

    const dadosRegistro = {email: novoEmailUsuario, senha: novaSenhaUsuario};

    if (validarNovoUsuario(dadosRegistro)) {
        alert("Registro realizado com sucesso!");
        window.location.href = "pagina-inicial.html";
    } else {
        alert("Erro ao registrar novo usuário");
    }

    document.getElementById('registro-form').reset();
}