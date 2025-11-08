function aynikelimel(kelimeler: string[]): string[][] {
  const gruplar: string[][] = [];

  for (const kelime of kelimeler) {
    const sirali = kelime.split('').sort().join('');
    let buldu = false;

    for (const grup of gruplar) {
      const grupa = grup[0].split('').sort().join('');
      if (grupa === sirali) {
        grup.push(kelime);
        buldu = true;
        break;
      }
    }

    if (!buldu) {
      gruplar.push([kelime]);
    }
  }

  return gruplar;
}

