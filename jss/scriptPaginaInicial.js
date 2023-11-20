const mensagensAdmin = obterMensagens();

const tabelaPai = document.getElementById("table-body");

mensagensAdmin.forEach(element => {
    const nome = element["nome"];
    const email = element["email"];
    const mensagem = element["mensagem"];

    const tableRow = document.createElement("tr");

    const tableData1 = document.createElement("td");
    tableData1.textContent = nome;  
    tableRow.appendChild(tableData1);
    
    const tableData2 = document.createElement("td");
    tableData2.textContent = email; 
    tableRow.appendChild(tableData2);

    const tableData3 = document.createElement("td");
    tableData3.textContent = mensagem; 
    tableRow.appendChild(tableData3);

    tabelaPai.appendChild(tableRow);
});