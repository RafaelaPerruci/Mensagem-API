function addDadosContato() {
    const nomeUsuario = document.getElementById("nome").value;
    const emailUsuario = document.getElementById("email").value;
    const novaMensagemUsuario = document.getElementById("mensagem").value;

    const addDadosContato = {nome: nomeUsuario, email: emailUsuario, mensagem: novaMensagemUsuario};

    inserirMensagem(addDadosContato);

    document.getElementById("contact").reset();
}