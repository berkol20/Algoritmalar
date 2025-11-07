function topla(sayı1: number[], sayı2: number): number[] {
  for (let i = 0; i < sayı1.length; i++) {
    for (let j = i + 1; j < sayı1.length; j++) {
      if (sayı1[i] + sayı1[j] === sayı2) {
        return [i, j];
      }
    }
  }
  return[]
}

console.log(topla([2, 7, 11, 15], 9)); // [0, 1]
