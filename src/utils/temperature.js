export function convertTemp(t, u) {
  if (u === 'c') {
    return t + ' °C'
  } else {
    return Math.round((t - 32) * (5 / 9)) + ' °C'
  }
}
