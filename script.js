document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();

    // Captura os valores dos campos do formulário
    var veiculo = document.getElementById("veiculo").value;
    var km = document.getElementById("km").value;
    var nivelCombustivel = document.getElementById("nivelCombustivel").value;
    var data = document.getElementById("data").value;
    var obs = document.getElementById("obs").value;

    // Validação dos campos obrigatórios
    if (veiculo.trim() === '' || km.trim() === '' || nivelCombustivel.trim() === '') {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Formatar a data no formato "dia/mês/ano"
    data = formatarData(data);

    // Adiciona os valores à tabela
    var tabela = document.getElementById("tabelaVeiculos");
    var novaLinha = tabela.insertRow(-1);
    var colunaVeiculo = novaLinha.insertCell(0);
    var colunaKm = novaLinha.insertCell(1);
    var colunaNivelCombustivel = novaLinha.insertCell(2);
    var colunaData = novaLinha.insertCell(3);
    var colunaObs = novaLinha.insertCell(4);

    colunaVeiculo.innerHTML = veiculo;
    colunaKm.innerHTML = km;
    colunaNivelCombustivel.innerHTML = nivelCombustivel;
    colunaData.innerHTML = data;
    colunaObs.innerHTML = obs;

    // Exibe a coluna de observações caso o campo tenha algum valor
    if (obs.trim() !== "") {
      document.querySelectorAll('.observacoes-coluna').forEach(function(coluna) {
        coluna.style.display = "table-cell";
      });
    }

    // Limpa os campos especificados
    document.getElementById("veiculo").value = "";
    document.getElementById("km").value = "";
    document.getElementById("nivelCombustivel").value = "";
    document.getElementById("obs").value = "";
  });
});

// Função para formatar a data no formato "dia/mês/ano"
function formatarData(data) {
  var partesData = data.split("-");
  return partesData[2] + "/" + partesData[1] + "/" + partesData[0];
}
