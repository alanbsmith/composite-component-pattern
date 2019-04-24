export function formatNumber(number = 0) {
  if (number < 10000) {
    return number.toLocaleString();
  }
  if (number < 1000000) {
    return `${(number / 1000).toFixed(1)}K`;
  }
  return `${(number / 1000000).toFixed(1)}M`;
}
