function count(str: string): Record<string, number> {
  const result: Record<string, number> = {};

  for (const char of str) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}

console.log(count("hello"));

