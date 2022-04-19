let ingredientes = ['Muzzarella', 'Tomate', 'Oregano', 'Huevos', 'Aceitunas', 'Cebolla', 'Salame', 'Roquefort', 'Salchichas', 'Cheddar'];

console.log(ingredientes);

const ParoImpar = (array) => {
    const par = [];
    const impar = [];

    for (let i = 0; i < ingredientes.length; i++) {
        if (ingredientes[i].length % 2 === 0) {
            par.push(ingredientes[i]);
        } else {
            impar.push(ingredientes[i]);
        }
    }
    return console.log(`Los ingredientes pares son: ${par}. Los ingredientes impares son: ${impar}`)
}
console.log(ParoImpar());

// NUEVA MANERA

const EsparOimpar = (array) => {
    const par = [];
    const impar = [];

    for (let i = 0; i < ingredientes.length; i++) {
        if (array[i].length % 2 === 0) {
            par.push(array[i]);
        } else {
            impar.push(array[i]);
        }
    }
    return [par, impar]
};

const [par, impar] = EsparOimpar(ingredientes);
console.log(`Los ingredientes pares son: ${par}. Los impares son: ${impar}`)