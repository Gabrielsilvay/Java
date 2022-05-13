hoje=new Date();//O operador new cria uma istancia de um tipo de objeto definido pelo usuario ou de um dos tipos nativos (built-in) que possuem uma função construtora.
xDia= hoje.getDay ();//o getDay é responsável para mostrar o dia da semana da matriz
diaSemana =new Array(7);
diaSemana[0]="domingo";
diaSemana[1]="Segunda-feira";
diaSemana[2]="Terça-feira";
diaSemana[3]="Quarta-feira";
diaSemana[4]="Quinta-feira";
diaSemana[5]="Sexta-feira";
diaSemana[6]="Sábado";
document.write("o número da semana é: +"+(xDia+1));
document.write("<p><b>" + "hoje é:"+diaSemana[xDia]);