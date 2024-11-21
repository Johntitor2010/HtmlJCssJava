//alert ('vai toamr no meio do seu cu') //alerta que aparece na tela
/*

var texto = 'Crusojava' //variavel do tipo string
var numeroint = -10 //variavel do tipo int
var numerofloat = 10.75 // variavel do tipo float
var numerobole = true //variavel do tipo booleano

alert (numeroint) // usando o alert pra mostrar o valor da variavel numeroint
// document.write (texto) // colocando o texto da varieavel string no body
console.log(numerofloat) //mostra no console do navegador a resposta da variavel

// comando acima são para debug

*/
/*
var nome = ' Mundo '
document.write('<h1>Olá,' + nome + 'bob esponja</h1>') 

var name = prompt ('Qual seu nome?')//prompt sempre chega uma string
var age = prompt ('qual sua idade?')
document.write('<h1> Bem vindo' + name + 'ao jogo</h1>')
var teste = null // variavel vazia
var teste3 //não está declarado nada/undefiened ou seja valor não existe
*/

// concatenacao
/*
var a = 10
var b = 20
var c = null

document.write('A: ' + a + '<br />')
document.write('B: ' + b + '<br />')
document.write('C: ' + c + '<br />')
document.write('<hr />')

c = a
a = b
b = c
c = null

document.write('A: ' + a + '<br />')
document.write('B: ' + b + '<br />')
document.write('C: ' + c + '<br />')
*/
// invertendo valores >>>>>>>>>>>>>>>>>>>>>>>>
/*
var a = 10
var b = 20
var c = null

document.write('A: ' + a + '<br />')
document.write('B: ' + b + '<br />')
document.write('C: ' + c + '<br />')
document.write('<hr />')

c = 20
if (a == 10) {
    a = c 
}

if (b > a){
    b = a
}

document.write('A: ' + a + '<br />')
document.write('B: ' + b + '<br />')
document.write('C: ' + c + '<br />')
document.write('<hr />')

== igual
=== identico
!= diferente
!== não identico
< menor
> maior
<= menor igual
>= maior igual
*/
/*
if (2 == 3) { // aqui se eu digitar direto no codigo 2==3 ele vai sair a primeira
    document.write ('ai como sou bandida') 
}

else {
    document.write ('ai como sou bandido')
}

// estrutura de condição if e else

var variavel1 = prompt ('viravel')
var variavel2 = prompt ('viravel')

variavel2 = parseInt(variavel2)// transformando a string em um valorr numero
variavel1 = parseInt(variavel1)// da para usar o parsefloat também

document.write(variavel + variavel1)
*/
/*
var variavel = 10
var variavel1 = 20
console.log(variavel1)
console.log(variavel)

document.write(variavel.toString() + variavel1.toString())// colocando a representação textual do numero 10 e 20, saindo seguidamente
*/

// operadores logicos
/*
if(2 == 2 && 3 >= 1) { // && retorna verdadeiro se todos forem verdadeiro
    document.write ('verdadeiro')
}
else {
    document.write ('falso')
}

if(2 == 2 || 3 >= 1 || 'a' == 'b') { // || retorna falso se todos forem falsas
    document.write ('verdadeiro')
}
else {
    document.write ('falso')
}

if(!(2 == 2  )) { // || nega tudo o que estiver ou inverte
    document.write ('verdadeiro')
}
else {
    document.write ('falso')
}
*/
// exemplo de operador lógico
var nota = prompt ('nota do aluno')
var faltas = prompt ('faltas')

var media = 7
var faltasMax = 15

if (nota >=  media && faltas <= faltasMax){
    document.write ('aprovado')
}
else {
    document.write ('reprovado')
}

