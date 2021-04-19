
//montante x (1+juros) ^n=>
//pure function:
const calculoJuros = (p, i, n) => p * Math.pow(1+i, n)

module.exports = {
    calculoJuros
}