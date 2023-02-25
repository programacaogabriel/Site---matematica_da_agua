function calcular() {
    let peso = document.getElementById("peso").value;

    let resultado = (peso * 35)
    const resultadoFinal = resultado.toFixed()

    document.getElementById("resultado").innerHTML = `O resultado é igual a ${resultadoFinal} litros`


}