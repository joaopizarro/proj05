let valor = Number(prompt("Digite o valor da compra:"));

if (valor >= 100) {
    let desconto = valor * 0.10;
    let valorFinal = valor - desconto;

    alert("Você ganhou 10% de desconto!\n" + "Valor do desconto: R$ " + desconto.toFixed(2) + "\n" + "Valor final: R$ " + valorFinal.toFixed(2));
} else {
    alert("Compra abaixo de R$100, sem desconto.\nValor final: R$" + valor.toFixed(2));
}