export function calculadora(n1: any, n2: any) {
  const num1 = Number(n1);
  const num2 = Number(n2);
  const sum: number = num1 + num2;
  const rest: number = num1 - num2;
  const mult: number = num1 * num2;
  const div: number = num1 / num2;

  return { sum, rest, mult, div };
}
