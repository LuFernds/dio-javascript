/*const pessoal = {
    nome: 'Luciano Fernandes',
    idade: 36,
    peso: 1.75,
    descricao: function(){
        console.log(`O ${this.nome} tem ${this.idade} e pesa ${this.peso}`);
    }
}

console.log(pessoal);
pessoal.descricao();

const atributo = 'idade';

console.log(pessoal[atributo]);

console.log(pessoal['peso']);
*/
/*const luciano = {
    nome: 'Luciano Fernandes',
    Idade: 36
};

console.log(luciano.nome);
console.log(luciano.Idade);
console.log(luciano);
*/
/*
const luciano = {
    nome: 'Luciano Fernandes',
    Idade: 36
};

luciano.altura = 1.75;

console.log(luciano);

delete luciano.nome;

console.log(luciano);
*/
/*
const pessoa = {
    nome: 'Luciano Fernandes',
    idade: 36,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.nome = Luciano;
pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();
*/
/*
class pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const luciano = new pessoa();
luciano.nome = 'Luciano Fernandes';
luciano.idade = 36;

console.log(luciano);

luciano.descrever();
*/
/*
class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        /*this.nome = 'Luciano Fernandes';
        this.idade = 36;
        *//*
       this.nome = nome;
       this.idade = idade;
       this.anoDeNascimento = 2023 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const luciano = new pessoa('Luciano',36);

luciano.descrever();
console.log(luciano);
*/

/*
class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
       this.nome = nome;
       this.idade = idade;
       this.anoDeNascimento = 2023 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
*/

class pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}!`);
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}!`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!`);
    }
}

const luciano = new pessoa('Luciano',36);
const jessica = new pessoa('Jessica',34);

compararPessoas(luciano,jessica);