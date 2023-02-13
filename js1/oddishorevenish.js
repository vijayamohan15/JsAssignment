const oddishOrEvenish = (n) => {
    let a = n.toString();
    let b = 0;
    for (let i = 0; i < a.length; i++) {
      b += parseInt(a[i]);
    }
    if (b % 2 === 1) {
      return "Oddish"
    } else return "Evenish"
  };

  console.log(oddishOrEvenish(121));
  console.log(oddishOrEvenish(41));