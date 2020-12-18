const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

// const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

export const getUsername = ({ session: { currentUser } }) =>
  `${capitalize(currentUser.firstName)} ${capitalize(currentUser.lastName)}`;

export const getBuyingPower = ({ session: { currentUser } }) =>
  currentUser.balance.toLocaleString('en');

// export const getPortfolioValue = ({ session: { currentUser } }) => {
//   return '--';
// };

export const getPortfolioValue = (holdings, quotes) => {
  if (holdings.length === 0 || quotes.length === 0) return '--';
  let amt = 0.0;
  for (const [symbol, val] of Object.entries(holdings)) {
    amt += quotes[symbol].latestPrice * val.amount;
  }
  return amt;
};
