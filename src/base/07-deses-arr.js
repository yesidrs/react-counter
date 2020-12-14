const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes;

export const returnArray = (string = "ABC", number = 123) => {
    return [string, number];
};

const [letras, numeros] = returnArray();

const useState = (valor) => {
    return [
        valor,
        () => {
            console.log("Hola Mundo");
        },
    ];
};
