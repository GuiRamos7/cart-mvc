export const moneyFormatter = (total) => {
  return total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
