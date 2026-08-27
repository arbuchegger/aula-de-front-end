console.log("Situação do Aluno.");
alert("Situação do Aluno.");

let status = "";
let nome = prompt('digite seu nome: ');
let variavel = parseFloat(prompt('digite sua nota 1: '));
let variavel2 = parseFloat(prompt('digite sua nota 2: '));
let media = (variavel + variavel2) / 2;

if (media >= 7) {
    status = "aprovado";
    alert(nome + ', sua nota 1 é: ' + variavel + ', sua nota 2 é: ' + variavel2 + ' e seu status é: ' + status);
} else if (media < 7 && media >= 5) {
    let recuperacao = parseFloat(prompt('digite sua nota de recuperação: '));

    if (recuperacao >= 5) {
        status = "aprovado";
    } else {
        status = "reprovado";
    }

    alert(nome + ', sua nota 1 é: ' + variavel + ', sua nota 2 é: ' + variavel2 + ' e sua nota na recuperação foi: ' + recuperacao + ' e seu status é: ' + status);
} else {
    status = "reprovado";
    alert(nome + ', sua nota 1 é: ' + variavel + ', sua nota 2 é: ' + variavel2 + ' e seu status é: ' + status);
}

