hoje=new Date();//O operador new cria uma istancia de um tipo de objeto definido pelo usuario ou de um dos tipos nativos (built-in) que possuem uma função construtora.
xDia= hoje.getDay ();//o getDay é responsável para mostrar o dia da semana da matriz
diaSemana =new Array(7);
pratododia=new Array(7);
diaSemana[0]="domingo";
diaSemana[1]="Segunda-feira";
diaSemana[2]="Terça-feira";
diaSemana[3]="Quarta-feira";
diaSemana[4]="Quinta-feira";
diaSemana[5]="Sexta-feira";
diaSemana[6]="Sábado";
document.write("<b>"+"o número da semana é: "+(xDia+1));
document.write("<p><b>" + "hoje é:"+diaSemana[xDia]);

pratododia =new Array(7);
pratododia[0]="Bife";
pratododia[1]="Costela";
pratododia[2]="Feijoada";
pratododia[3]="Omelete";
pratododia[4]="Bisteca";
pratododia[5]="Churrasco";
pratododia[6]="Feijoada";
document.write("<p><b>" + "Prato do dia é:"+" "+pratododia[xDia]);

Valor =new Array(7);
Valor[0]="22,00";
Valor[1]="20,00";
Valor[2]="27,00";
Valor[3]="17,00";
Valor[4]="19,00";
Valor[5]="30,00";
Valor[6]="27,00";
document.write("<p><b>" + "Valor:"+" "+Valor[xDia]);