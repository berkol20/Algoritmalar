function binar(sayılar: number[], hedef: number): number {
  let left = 0;
  let right = sayılar.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (sayılar[middle] === hedef) {
      return middle;
    }

    if (sayılar[middle] < hedef) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}
