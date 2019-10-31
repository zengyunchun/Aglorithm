const arr = str.match(/(\w)\1*/g);
const maxLen = Math.max(...arr.map(s => s.length));
const result = arr.reduce((pre, curr) => {
  if (curr.length === maxLen) {
    pre[curr[0]] = curr.length;
  }
  return pre;
}, {});

console.log(result);