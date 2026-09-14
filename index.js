import rl from "readline-sync";

const operadores = ["+", "-", "*", "/"];

while (true) {
  const indice = rl.keyInSelect(operadores, "Operador: ", { cancel: "Salir" });

  if (indice === -1) {
    break;
  }

  const operador = operadores[indice];

  const cantidad = rl.questionInt("Cantidad de operandos: ");

  let resultado = rl.questionFloat("Primer numero: ");

  for (let i = 1; i < cantidad; i++) {
    const numero = rl.questionFloat(`Numero ${i + 1}: `);

    if (operador === "/" && numero === 0) {
      console.log("No se puede dividir por cero");
      resultado = null;
      break;
    }

    if (operador === "+") {
      resultado += numero;
    }

    if (operador === "-") {
      resultado -= numero;
    }

    if (operador === "*") {
      resultado *= numero;
    }

    if (operador === "/") {
      resultado /= numero;
    }
  }

  if (resultado !== null) {
    console.log(`Resultado = ${resultado}`);
  }
}