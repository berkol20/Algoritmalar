class List {
  val: number;
  next: List | null;

  constructor(val: number, next: List | null = null) {
    this.val = val;
    this.next = next;
  }
}
function reverse(head: List | null): List | null {
  let prev: List | null = null;
  let curr: List | null = head;
  let next: List | null = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
