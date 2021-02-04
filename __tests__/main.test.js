import media from '../src/main'

test('media lessThan', () => {
  const css = media.lessThan.phone`width: 100%`
  expect(css.replace(/\s/g, '')).toMatch('@media(max-width:420px){width:100%}')
})
test('media greaterThan', () => {
  const css = media.greaterThan.phone`width: 100%`
  expect(css.replace(/\s/g, '')).toMatch('@media(min-width:420px){width:100%}')
})
