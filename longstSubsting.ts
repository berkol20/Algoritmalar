function longsub(s: string): number {
  const set = new Set<string>();
  let i = 0,
    j = 0,
    best = 0;
  while (j < s.length) {
    if (!set.has(s[j])) {
      set.add(s[j]);
      j++;
      best = Math.max(best, set.size);
    } else {
      set.delete(s[i]);
      i++;
    }
  }
  return best;
}
