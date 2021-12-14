const calcTotal = (shipping, items) => {
  let total = 0;
  total = total + shipping;
  for (let [value] of Object.entries(items)) {
    const { price, count } = items[value]
    total = total + price * count;
  }
  return total.toFixed(2);
}

export default calcTotal;
