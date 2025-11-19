function Average(nums: number[]): number {
  const total = nums.reduce((sum, num) => sum + num, 0);
  return total / nums.length;
}

console.log(Average([10, 20, 30, 40])); 
