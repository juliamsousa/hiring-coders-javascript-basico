class Math {
  sum(n1, n2) {
    return n1 + n2;
  }

  sub(n1, n2) {
    return n1 - n2;
  }

  div(n1, n2) {
    return n1 / n2;
  }

  mult(n1, n2) {
    return n1 * n2;
  }
}

function main() {
  var math = new Math();

  console.log(math.sub(10, 6));
  console.log(math.sum(10, 6));
  console.log(math.div(10, 6));
  console.log(math.mult(10, 6));
}

main();