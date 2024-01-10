class tipoCarro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calculargastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

/*
Primeira Parte
const carro = new tipoCarro('Palio','Prata',1/12);

console.log(`O ${carro.marca} de cor ${carro.cor} gastou ${carro.gastoMedioPorKm} KM!`);
*/

const carro = new tipoCarro('Palio','Prata',1/12);
console.log(carro.calculargastoDePercurso(70, 5));



