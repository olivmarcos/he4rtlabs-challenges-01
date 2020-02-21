document.getElementById("resultado").style.visibility = 'hidden';
function calcularValor() {
    let horasDiarias = document.getElementById("diario").value;
    let diasEfetivos = document.getElementById("efetivos").value;
    let diasFerias = document.getElementById("ferias").value;
    let valorProjeto = document.getElementById("valor").value;

    valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )

    document.querySelector("#resultado h1").innerHTML = "R$ " + valorHora;
    console.log(valorHora);
    
    document.getElementById("resultado").style.visibility = 'inherit';
}

