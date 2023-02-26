function calcular() {
    let peso = document.getElementById("peso").value;

    let resultado = (peso * 35)
    const resultadoFinal = resultado.toFixed()
    const resultadoFinalLitros = resultadoFinal / 1000



    if (resultadoFinal < 0) {
        document.getElementById("resultado").innerHTML = `O número não pode ser menor que 0`
    } else {

        document.getElementById("resultado").innerHTML = `O resultado é igual a ${resultadoFinal} mL / ${resultadoFinalLitros} Litros`
    }




}