const breakpoints = {
  phone: '420px',
  tablet: '768px',
  desktop: '1200px'
}

type Media = 'phone' | 'tablet' | 'desktop' | number

export default {
  lessThan: (media: Media, css: string): string => {
    if (isNaN(+media)) {
      return `
          @media (max-width: ${breakpoints[media]}) {
            ${css}
          }
        `
    }

    return `
      @media (max-width: ${media}px) {
        ${css}
      }
    `
  },
  greaterThan: (media: Media, css: string): string => {
    if (isNaN(+media)) {
      return `
          @media (min-width: ${breakpoints[media]}) {
            ${css}
          }
        `
    }

    return `
      @media (min-width: ${media}px) {
        ${css}
      }
    `
  }
}
