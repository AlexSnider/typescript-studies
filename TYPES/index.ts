const nome: string = "Alex";
const idade: number = 22;
const adulto: boolean = true;

const hobbies: string[] = ["Videogame", "Corrida"];
const endereco: [string, number] = ["Rua 1", 123];

const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: "Alex",
  idade: 22,
  adulto: true,
};

// UNION TYPES
let codigo: string | number = "12345";
codigo = 12345;
codigo = "12345";

function soma(a: number, b: number, c: number = 2) {
  return a + b * c;
}

console.log(soma(2, 2));

console.log(pessoa.nome, "tem", pessoa.idade, "anos");
