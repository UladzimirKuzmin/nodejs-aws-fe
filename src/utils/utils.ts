const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatAsPrice = (price: { data: { amount: number }[] }) =>
  price ? priceFormatter.format(price.data[0].amount) : "Not available";
