# styled-media 💅

![Drone (cloud)](https://img.shields.io/drone/build/chsilva/styled-media)
![npm (scoped)](https://img.shields.io/npm/v/@caiodev/styled-media)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@caiodev/styled-media)
![Codacy grade](https://img.shields.io/codacy/grade/bae95410831043fb8d3bff7ac3760ef3)

Create breakpoints within `styled-components` as easily and quickly as possible 💅

# Installation

## yarn

```bash
yarn add @caiodev/styled-media
```

## npm

```bash
npm i @caiodev/styled-media
```

# Usage

You can create a [custom breakpoint](#custom-breakpoint) but the default breakpoints are the following:

```javascript
const breakpoints = {
  phone: '420px',
  tablet: '768px',
  desktop: '1200px',
}
```

## Example

```javascript
import styled from 'styled-components'
import media from '@caiodev/styled-media'

const Header = styled.header`
  width: 100%;
  height: 64px;

  ${media.lessThan.tablet`
    height: 48px;
  `}
`

const Footer = styled.footer`
  width: 100%;
  height: 64px;

  ${media.greaterThan.desktop`
    height: 80px;
  `}
`
```

# Custom breakpoint

You can create custom breakpoints using the `customBreakpoint` method

## Example

```javascript
import styled from 'styled-components'
import media, { customBreakpoint } from '@caiodev/styled-media'

customBreakpoint('bigTablet', '960px')

export const Header = styled.header`
  width: 100%;
  height: 64px;

  ${media.lessThan.bigTablet`
    height: 48px;
  `}
`
```

# API

## `customBreakpoint(key, value)`

**Parameters:**

- **key**: breakpoint name (required)
- **value**: size of breakpoint in `px` (required)
