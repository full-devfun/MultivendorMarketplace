const calcSubTotal = (items) => {
  let total = 0;
  for (let [value] of Object.entries(items)) {
    const { price, count } = items[value]
    total = total + price * count;
  }
  return total;
}

export default calcSubTotal
