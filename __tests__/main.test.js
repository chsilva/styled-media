/* const media = require('../src/main') */
import media from '../src/main'

test('media lessthan', () => {
  expect(media.lessThan.small`width: 100%`).toBe('@media(max-width:420px){width:100%}')
})
test('media greaterthan', () => {
  expect(media.greaterThan.small`width: 100%`).toBe('@media(min-width:420px){width:100%}')
})
test('media equalto', () => {
  expect(media.equalTo.small`width: 100%`).toBe('@media(width:420px){width:100%}')
})
