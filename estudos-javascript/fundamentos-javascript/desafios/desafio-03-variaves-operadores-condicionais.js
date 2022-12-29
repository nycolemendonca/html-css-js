/* 
    Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme os dados abaixo:

    Media = (nota1 + nota2 + nota3) / 3

    Classificação:
        - Média menor que 5, reprovação;
        - Média entre 5 e 7, recuperação;
        - Média acima de 7, passou de semestre.
*/

const nota1 = 10;
const nota2 = 10;
const nota3 = 10.0;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) console.log("Você foi reprovado(a).");
else if ((media >= 5) && (media <= 7)) console.log("Você está de recuperação.");
else console.log("Você passou de semestre.");