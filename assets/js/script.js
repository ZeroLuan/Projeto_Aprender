/*Formas de escrever a informação
 
alert("Bem-Vindo");

//console.log("Olá Mundo");

/*-----*
/*Variaveis

let carro = "Ferrari";
console.log(carro);

let preco = 19.99;
console.log(preco);

/*-----*/
/*Let, Var, Const

let sobreNome = "Alves";
console.log(sobreNome);

//var sobreNome = "Alves";
console.log(sobreNome);

//const sobreNome = "Alves";
//console.log(sobreNome);  Variavel constante
// variaevel normal ela pode mudar, o let também
/*-----

// A concatenação é a junção de duas strings,

let nome = "Luan"
let sobreNome2 = "Alves"

//let nomeCompleto = (nome + ' ' + sobreNome2);

let nomeCompleto = `${nome} ${sobreNome2}`;

// Tramplate string, uma forma diferente 
//melhorada de usar uma string.

console.log("Nome: " + nomeCompleto);

// diferente de uma soma.//

// Tramplate string, uma forma diferente 
//melhorada de usar uma string.

// Mais um exemplo

let idade = 19;

let idadeString = `${idade} anos`;

console.log(idadeString);
/*-----

// IF e 

let idade2 = 5;

if (idade2 > 17) {
    console.log(" = Maior de idade");
} else {
    console.log(" = Menor de idade");
}
/*-----*/

//Condicional === e == ; 
//As duas significa "igual", da prioriader qundo for
// usar o ===, so usar o == quando tiver ctz que funcina
/*-----

// if e else, && = quando as 2 forem verdadeiras
//  e || = significa "OU" um ou outro

let idade3 = 65

/*
if (idade >= 18) {
    if (idade < 60) {
        console.log("Você é adulto")
    }
}


//if (idade3 >= 18 && idade3 < 60) {
//    console.log("Você é adulto");
//}

if (idade3 >= 0 && idade3 < 17) {

    console.log("Você é uma criança");

} if (idade3 >= 18 && idade3 < 59) {

    console.log("Você é um Adulto");

} if (idade3 >= 60 && idade < 150) {

    console.log("Você é um Idoso");

}

----

// condicinal ou ternario (? e :)

let isMember = true;

let shipping = isMember ? 2 : 10; 

console.log("Frete: " + shipping);

console.log(isMember ? 'Você é membro' : 'Você não e membro');

// outro exemplo 

let age = 14;

let isAdult = age >= 18 ? 'sim' : 'não';

console.log(isAdult); 

/*----

let profession = "fiscal";

switch(profession) {
   
    case 'fiscal':
        console.log('Sua camisa sera VERDE');
    break;
    case 'bombeiro':
        console.log('Sua camisa sera VERMELHA');
    break;
    case 'policial':
        console.log('Sua camisa sera AZUL');
    break;
    default:
        console.log('Sua camisa sera a PRETA');
    break;

}

// O switch é "caso" precise de umas das opções, se cooresponder 
//a nenhuma opcão entao vai para o "default".

-----*/
/*

let result = somar(12, 15);

console.log('Resultado: ', result);

function somar(vald1, vald2){

    return vald1 +  vald2;
}

// --------------------

function nomeCompleto01 (nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

let nomeComp = nomeCompleto01("teste", "total");

console.log(nomeComp);

let x = 80;
let y = 10;

let nova_equacao = porcetagem(x, y);

console.log(`${nova_equacao}% de ${x} e ${y}`);

function porcetagem(num1, num2){

    return (num2 / num1) * 100;

}

// Arrow function

const somar = (num1, num2) => {

    resp = num1 + num2;

    return resp;
} 

let x = 10;
let y = 23;

console.log(somar(x, y));

function somaDaMulti(num1, num2){

    const multiplicaNum1 = (x) => x * x;
    
    r1 = multiplicaNum1(num1);
    r2 = multiplicaNum1(num2);

    respFinal = r1 + r2;

    return respFinal;
}

console.log(somaDaMulti(8,5));

let ingredientes = [
    'ovo',
    'açúar',
    'leite',
    'corante',
    'sal'
];

ingredientes.push('cebola');

ingredientes.pop();
//remove o ultimo item do arrey

ingredientes.shift();
//remove o primeiro item do arry

console.log(`Numero de Ingredientes ${ingredientes.length}`);

let carros = [
    'BMW',
    'Ferrari',
    'Mercedes'
];

carros[1] = 'Audi';

carros.push('Fiat');

carros.shift();
carros.pop();

console.log(`Lista Nova: ${carros}`);

console.log(`${carros.length}`);

let usuario = {
    nome: 'Luan',
    idade: 20,
    cpf: '056.989.935-48',
    caracteristicas: {
        rua: 'João Gualberto de Oliveira',
        data: '16/05/2024'
    }
}

console.log(`${usuario.nome} tem ${usuario.idade} anos`);




let cores = [
    { nome: 'preto', qtd: 10 },
    { nome: 'azul', qtd: 5 },
    { nome: 'vermelho', qtd: 15 }
];

/*

for(let i = 0; i < cores.length; i++){

    console.log(cores[i]);

}

//São iguais o de cima faz a quantidade de vezes definida
//ja esse de baixo faz a quantidade de vezes que tem na variavel 
// pois passa do limite da erro de undefined

for(let i in cores){

    cores[i].nome = cores[i].nome.toUpperCase();
    //toUpperCase dixa maiusculo 

}


let frutas = ['Banana', 'Uva', 'Maçã', 'Melancia'];

for(let i = 0; i < 4; i++){

    //frutas.push();
    //Adicina um item ao array

    //frutas.shift();
    // Remove o item do inicio do array

    //frutas.pop();
    // Remove o item do final do array

    //frutas.join(', ');
    // Ele adiciona uma string para separar os itens do array

    console.log(frutas.join(', '));

}

//Organizar aufabeticamente .sort();
//Trocar a rodem de tras para frente .resverse();



let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'BMW', year: 2018 },
    { brand: 'Ferrari', year: 2020 }
];

----------
cars.sort((a, b) => {

    if(a.year > b.year){
        return 1;
    } else if(a.year < b.year){
        return -1;
    } else {
        return 0;
    }

});
---------

OU ----->


cars.sort((a, b) => a.year - b.year);

console.log(cars);


*/

/*


let bigFruits = fruits.filter((item) => item.length > 4);

console.log(bigFruits)


let frutas = [
    'melancia',
    'batata',
    'tomate',
    'morango'
];


let user = {
    nome: 'Luan',
    idade: 20,
    cpf: '056.989.935.48'
}

// O of faz a variavel pegar o Valor
// A cor de cores

for(let i of frutas){
    console.log(i);
}

// Já o IN deixa pegar por valor e por posição
// O valor de cores 

for (let key in user) {
    console.log(key + ":", user[key]);
}

*/







/*

// children ele serve para pegar os filhos do elemento

// innerHTML ele retorna o contudo dos elementos do html

// outerHTML ele pega o elemento assim como children porem 
//pega por fora ou seja a ul e a li, sendo que o children pega
// o filho a li

// append() ele serve para 'adicionar' um elemento sem o modificar
// append e diferente do (+=)
// so funciona para texto

// appendchild ele faz a adicao de um novo 
//elemento no final do contedudo, 
//nao suistitui apenas adiciona

// preppend faz a mesma coisa do appendchid 
// porém no comeco do elemento






function clicou(){

    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    //ul.children[1].innerHTML = "(alterado)";

    //ul.children[1].append("(alterado)");

    //ul.outerHTML = "<strong>Alterado</strong>"

    //ul.innerHTML += "Item adicionado1"

    let newLi = document.querySelector("li");

    //newLi.innerHTML = "Item adicionado2"
    //ul.appendChild(newLi);


    //newLi.innerHTML = "Item adicionado2"
    //ul.prepend(newLi);

}



function clicou(){

    let click = 0;
    click++;

    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    let newUl = document.createElement('ul');
    // OBSERVAR QUE ELE USAOU """CREATE ELEMENT"""

    for(let i = 0; i < click; i++){

        let newLi = document.createElement('li');
        newLi.innerHTML = "Item nmr" + i;
        newUl.append(newLi);

    }
    
    ul.after(newUl);

}



function clicou(){

    const input = document.querySelector('.teste3');
    const btn = document.querySelector('.botao');

    if(input.getAttribute('type') == 'text'){

        input.setAttribute('type', 'password');
        btn.innerText = "Mostrar Senha"

    } else {
        
        input.setAttribute('type', 'text');
        btn.innerText = "Ocultar Senha"

    }

    // O setAttribute serve para adicionar/colocar ou 'Alterar o atributo',
    // tem 2 parametros o primeiro é qual atributo vai querer trocar e
    /// o segundo parametro é o novo atributo que vai subistituir

    //if(input.hasAttribute('placeholder')){
     //   alert('Tem Sim');
    //} else {
      //  alert('Não tem')
    //}

    //console.log(input.getAttribute('type'));
    //pega o atributo pelo atributo

}

function clicou(){

    const ul = document.querySelector("#teste1");

    ul.children[1].style.backgroundColor = '#00F';
    ul.children[0].style.backgroundColor = '#190';

}


function clicou(){

    const button = document.querySelector("button");

    button.classList.toggle('azul');
    //Se não tiver ele adiciona, se tiver ele remove
    // O 'toggle' serve para fazer a verificação se não houver
    // a calsse ele cria se houver ele remver 

    // existe o '.replace' pesquisar sobre
    // serve para trocar de classes resume o add e remove em um
    // faz a troca não retorna bollean como o toggle

    if(button.classList.contains('verde')){
        // o 'contains' ele é como se fosse o strcpy do em C
        // ele verifica a string se e igual ou não retorna um bollean
        button.classList.remove('azul');
        button.classList.add('verde');
    } else {
        button.classList.add('azul');
        button.classList.remove('verde');
    }
    

}


function soltou(event){
    console.log(event.code);
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);


function clicou(){

    const ul = document.querySelector("#teste1");
    const newLi = document.createElement("li");

    const input = document.querySelector(".teste3");
    const valor = input.value;

    newLi.innerText = valor;
    ul.appendChild(newLi);

}

function soltou(event) {
    console.log("Tecla Apertada " + event.code);
    console.log("Shift? " + event.shiftKey);
    console.log("Ctrl? " + event.ctrlKey);
    console.log("---");
}

//const input = document.querySelector(".teste3");
//input.addEventListener('keyup', soltou);

// Essas linhas de cima são a mesma coisa dessa logo a baixo
// Ela resume o de cima

document.addEventListener('keyup', soltou);

const input = document.querySelector("input");
const lista = document.querySelector("#teste1");


function handleKeyUp(e){
    if(e.key === 'Enter'){
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        lista.appendChild(newLi);

        input.value = '';
    }
}


input.addEventListener('keyup', handleKeyUp);

class Person {

    age = 0;

    constructor(name) {
        this.name = name;
    }
}

let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");
// Essas 3 linhas a cima são o objeto,
// tambem chamdas de INSTANCIA

p1.age = 20;
p2.age = 30;
p3.age = 40;

console.log(`P1  = ${p1.name} tem ${p1.age} anos`);
console.log(`P2  = ${p2.name} tem ${p2.age} anos`);
console.log(`P3  = ${p3.name} tem ${p3.age} anos`);

//----------------------

class Person {

    // Dentro da class geralmente tem essa ordem
    // primeiro tem as variaveis comuns
    // depois o constructor e seus parametros
    // no final tem todas as ações que o objeto pode receber

    // vamos fazer ele dar um passo para frente

    // para referenciar usamos o this, referecnair o joao por ex
    // saber exatamente qual o  objeto que se referencia

    age = 0;
    steps = 0;

    constructor(name) {
        this.name = name;
    }

    takeAStep() {
        this.steps++;
    }

    setAge(newAge) {
        if(typeof newAge == 'number'){
            this.age = newAge
        } else {
            console.log("Idade não acita, apenas numero");
        }
    }

}

let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");
// Essas 3 linhas a cima são o objeto,
// tambem chamdas de INSTANCIA

p1.setAge(44);

console.log(`${p1.name} tem ${p1.age} anos`);

*/



/*

let botao = document.querySelector('.botao');
botao.addEventListener('click', clicou);

function clicou(){
    
    const sessao = document.querySelector('#sessao');
    const posicaoAddUl = sessao.querySelector('.tittle');

    let newUl = document.createElement('ul');
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Item';

    newUl.append(newLi);

    posicaoAddUl.after(newUl);
    

}


//esse de baixo funciona !

let botao = document.querySelector('.botao');
botao.addEventListener('click', clicou);


function clicou(){
    
    //const posicaoAdd = document.querySelector('#sessao');
    const ul = document.querySelector('#teste1');

    let newLi = document.createElement('li');
    newLi.innerHTML = 'Item';

    ul.append(newLi);
    
}
*/



function clicou(){

    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');

    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password');
        botao.innerText = "Mostrar Senha";
    }else{
        input.setAttribute('type', 'text');
        botao.innerText = "Ocultar Senha";
    }
}
