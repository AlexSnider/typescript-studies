enum DiaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
}

enum proposta {
  Aprovada = "Aprovada",
  Reprovada = "Reprovada",
  Pendente = "Pendente",
}

function obterDiaSemana(number: number): string {
  return DiaSemana[number];
}

function obterProposta(status: proposta): string {
  return status;
}

console.log("Obtendo dias da semana através de ENUMS");
console.log(obterDiaSemana(0));
console.log(obterDiaSemana(1));
console.log(obterDiaSemana(2));
console.log(obterDiaSemana(3));
console.log(obterDiaSemana(4));
console.log(obterDiaSemana(5));
console.log(obterDiaSemana(6));

console.log("Obtendo propostas através de ENUMS");
console.log(obterProposta(proposta.Aprovada));
console.log(obterProposta(proposta.Reprovada));
console.log(obterProposta(proposta.Pendente));
