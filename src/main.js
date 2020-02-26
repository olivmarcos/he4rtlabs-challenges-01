document.getElementById("resultado").style.visibility = 'hidden';

function calcularValor() {

    let valorEleemtos = pegarElementos();

    valorProjeto = valorEleemtos[3].value;
    diasEfetivos = valorEleemtos[1].value;
    horasDiarias = valorEleemtos[0].value;
    diasFerias = valorEleemtos[2].value;

    validarForm(horasDiarias, diasEfetivos, diasFerias, valorProjeto);

    valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias)) + ((diasFerias * diasEfetivos * horasDiarias))

    if (valorHora) {
        document.querySelector("#resultado h1").innerHTML = "R$ " + valorHora;
        console.log(valorHora);

        document.getElementById("resultado").style.visibility = 'inherit';
    }
}

function validarForm(horasDiarias, diasEfetivos, diasFerias, valorProjeto) {
    let elementos = pegarElementos();

    if (isNaN(horasDiarias)) {
        elementos[0].classList.add("warn");
        setTimeout(() => {
            elementos[0].classList.remove("warn");
        }, 500);
    }

    if (isNaN(diasEfetivos)) {
        elementos[1].classList.add("warn");
        setTimeout(() => {
            elementos[1].classList.remove("warn");
        }, 500);
    }

    if (isNaN(diasFerias)) {
        elementos[2].classList.add("warn");
        setTimeout(() => {
            elementos[2].classList.remove("warn");
        }, 500);
    }

    if (isNaN(valorProjeto)) {
        elementos[3].classList.add("warn");
        setTimeout(() => {
            elementos[3].classList.remove("warn");
        }, 500);
    }
}

function pegarElementos() {
    let horasDiarias = document.getElementById("diario");
    let diasEfetivos = document.getElementById("efetivos");
    let diasFerias = document.getElementById("ferias");
    let valorProjeto = document.getElementById("valor");

    return elementos = [horasDiarias, diasEfetivos, diasFerias, valorProjeto];
}