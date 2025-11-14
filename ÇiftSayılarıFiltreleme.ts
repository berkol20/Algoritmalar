function çiftSayıFiltrele(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}
console.log(çiftSayıFiltrele([1, 2, 3, 4, 5, 6]));
