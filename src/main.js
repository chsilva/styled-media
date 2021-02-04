const breakpoints = {
  phone: '420px',
  tablet: '768px',
  desktop: '1200px',
}

export default {
  lessThan: Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) =>
      `
      @media (max-width: ${breakpoints[label]}) {
        ${args}
      }
    `
    return acc
  }, {}),
  greaterThan: Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) =>
      `
      @media (min-width: ${breakpoints[label]}) {
        ${args}
      }
    `
    return acc
  }, {}),
}
