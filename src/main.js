const breakpoints = {
  small: '420px',
  medium: '768px',
  large: '1024px',
  largest: '1280px',
  huge: '1800px',
}

export default function () {
  return {
    lessThan: Object.keys(breakpoints).reduce((acc, label) => {
      acc[label] = (...args) => `
      @media (max-width: ${breakpoints[label]}) {
        ${args}
      }
    `
      return acc
    }, {}),
    greaterThan: Object.keys(breakpoints).reduce((acc, label) => {
      acc[label] = (...args) => `
      @media (min-width: ${breakpoints[label]}) {
        ${args}
      }
    `
      return acc
    }, {}),
    equalTo: Object.keys(breakpoints).reduce((acc, label) => {
      acc[label] = (...args) => `
      @media (width: ${breakpoints[label]}) {
        ${args}
      }
    `
      return acc
    }, {}),
  }
}
